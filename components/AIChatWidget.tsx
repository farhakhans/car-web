
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';

const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8.5 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 14.33 7 13.5 7.67 12 8.5 12zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3.5-3.03c1.63 0 3.03.87 3.82 2.12H8.18c.79-1.25 2.19-2.12 3.82-2.12z"/>
    </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
    </svg>
);


const AIChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm your AI Sales Agent. How can I help you find the perfect car today?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { role: 'user', content: userInput };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    
    setMessages(prev => [...prev, { role: 'model', content: '' }]);
    
    try {
      for await (const chunk of streamChatResponse(userInput)) {
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.role === 'model') {
            const updatedMessages = [...prev];
            updatedMessages[prev.length - 1] = { ...lastMessage, content: lastMessage.content + chunk };
            return updatedMessages;
          }
          return prev;
        });
      }
    } catch (error) {
      console.error("Failed to fetch stream:", error);
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.role === 'model') {
           const updatedMessages = [...prev];
           updatedMessages[prev.length - 1] = { ...lastMessage, content: "Sorry, something went wrong." };
           return updatedMessages;
        }
        return [...prev, { role: 'model', content: "Sorry, something went wrong." }];
      });
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading]);

  return (
    <div className="flex flex-col h-full w-full bg-black/50 sm:bg-white/10 sm:backdrop-blur-md sm:rounded-2xl shadow-2xl sm:border sm:border-white/20 overflow-hidden">
      <div ref={chatContainerRef} className="flex-1 p-6 space-y-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-4 animate-fadeIn ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role === 'model' && <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white"><BotIcon className="w-6 h-6"/></div>}
            <div className={`prose prose-invert max-w-none text-white rounded-2xl p-4 ${msg.role === 'model' ? 'bg-black/20' : 'bg-primary-600'}`}>
              <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: msg.content.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-300 underline">$1</a>') }}></p>
              {isLoading && msg.role === 'model' && index === messages.length - 1 && <div className="w-2 h-2 bg-white rounded-full mt-2 animate-pulse"></div>}
            </div>
            {msg.role === 'user' && <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white"><UserIcon className="w-6 h-6"/></div>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-white/20 bg-black/20 sm:bg-transparent">
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about our cars..."
            className="flex-1 w-full px-4 py-3 bg-white/10 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder-gray-400"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-110 disabled:bg-primary-800 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary-400"
          >
           <SendIcon className="w-6 h-6"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatWidget;
