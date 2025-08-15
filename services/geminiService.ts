import { GoogleGenAI, Chat } from '@google/genai';
import { SYSTEM_INSTRUCTION } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: SYSTEM_INSTRUCTION,
  },
});

export async function* streamChatResponse(message: string): AsyncGenerator<string, void, unknown> {
  try {
    const stream = await chat.sendMessageStream({ message });
    for await (const chunk of stream) {
      yield chunk.text;
    }
  } catch (error) {
    console.error("Error streaming response from Gemini:", error);
    yield "I'm sorry, but I seem to be having trouble connecting to my systems right now. Please try again in a moment.";
  }
}
