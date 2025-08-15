
import React, { useState, useEffect, useCallback } from 'react';
import AIChatWidget from './components/AIChatWidget';
import ThemeToggle from './components/ThemeToggle';
import { Theme, Car } from './types';
import { CAR_DATA } from './constants';

type Page = 'home' | 'listing' | 'detail' | 'services' | 'about' | 'contact' | 'checkout' | 'confirmation';

// --- SVG Icons ---
const CartIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const ChatIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
);
const CloseIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const CreditCardIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);
const CheckCircleIcon = ({ className = "w-16 h-16" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const PhoneIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MailIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationMarkerIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);


// --- Page & UI Components ---

const Navbar = ({ theme, toggleTheme, onNav, cartCount }) => {
    return (
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">
                          <span className="text-primary-500">Farha</span> Showroom
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNav('listing'); }} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Cars</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNav('services'); }} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNav('about'); }} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button onClick={() => onNav('cart')} className="relative text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="Open cart">
                            <CartIcon />
                            {cartCount > 0 && <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">{cartCount}</span>}
                        </button>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

const HomePage = ({ onNav }) => (
    <div className="relative text-white text-center animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>Find Your Dream Car Today</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>Explore our exclusive collection of luxury and performance vehicles. Our AI Sales Agent is here to assist you 24/7.</p>
            <button onClick={() => onNav('listing')} className="px-8 py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                Explore Our Collection
            </button>
        </div>
    </div>
);

const CarCard = ({ car, onAddToCart, onViewDetails }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="relative">
      <img src={car.images[0]} alt={`${car.make} ${car.model}`} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
        <p className="text-primary-300 font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car.price)}</p>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{car.description}</p>
      <div className="flex justify-between items-center">
        <button onClick={() => onViewDetails(car)} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">View Details</button>
        <button onClick={() => onAddToCart(car)} className="px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-full hover:bg-primary-700 transition-colors">Add to Cart</button>
      </div>
    </div>
  </div>
);

const CarListingPage = ({ onAddToCart, onViewDetails }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Our Collection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CAR_DATA.map((car, index) => (
        <div key={car.id} className="animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
            <CarCard car={car} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
        </div>
      ))}
    </div>
  </div>
);

const CarDetailPage = ({ car, onAddToCart, onBack }) => {
    const [mainImage, setMainImage] = useState(car.images[0]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
            <button onClick={onBack} className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline mb-6">
                &larr; Back to Listing
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <img src={mainImage} alt={`${car.make} ${car.model}`} className="w-full rounded-lg shadow-2xl mb-4 aspect-[16/10] object-cover"/>
                     <div className="grid grid-cols-4 gap-2">
                        {car.images.map((img, index) => (
                            <button key={index} onClick={() => setMainImage(img)}>
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-full rounded-md cursor-pointer aspect-video object-cover transition-all duration-200 ${mainImage === img ? 'ring-2 ring-primary-500 scale-105' : 'opacity-70 hover:opacity-100'}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">{car.make} {car.model}</h2>
                    <p className="text-3xl text-primary-500 font-bold my-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(car.price)}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{car.description}</p>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-8">
                        {car.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                    <button onClick={() => onAddToCart(car)} className="w-full px-8 py-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-transform transform hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};


const ServicePage = () => {
    const services = [
        { title: 'Full Synthetic Oil Change', description: "Extend your engine's life with top-tier synthetic oil.", price: '$129.99' },
        { title: 'Premium Detailing Package', description: 'Interior and exterior detailing to restore that new car shine.', price: '$399.99' },
        { title: 'Tire Rotation & Balancing', description: 'Ensure optimal performance and longevity for your tires.', price: '$79.99' },
        { title: 'Brake Inspection & Service', description: 'Comprehensive brake system check and servicing.', price: 'Contact for Quote' }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">Our Premium Services</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                Keep your vehicle in pristine condition with our range of premium services. Our certified technicians use only the highest quality parts and techniques to ensure your car performs at its best.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                        <h3 className="text-xl font-bold text-primary-500 mb-3">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 h-20">{service.description}</p>
                        <p className="font-bold text-lg text-gray-800 dark:text-white">{service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AboutPage = () => (
    <div className="animate-fadeIn">
        <div className="bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                 <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fadeInUp">Revolutionizing Car Buying</h2>
                 <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
                    Founded in 2024, Farha Showroom merges cutting-edge technology with a passion for automotive excellence to provide an unparalleled customer experience.
                 </p>
            </div>
        </div>
        
        <div className="py-20">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                 <div className="animate-fadeInUp" style={{animationDelay: '300ms'}}>
                    <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern showroom interior" className="rounded-lg shadow-xl"/>
                 </div>
                 <div className="animate-fadeInUp" style={{animationDelay: '400ms'}}>
                    <h3 className="text-3xl font-bold mb-4 text-primary-500">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">Our mission is to make finding and purchasing your dream car a seamless, enjoyable, and transparent process. Our digital-first approach, powered by our advanced AI Sales Agent, allows you to explore our curated collection from anywhere, at any time. We believe in quality, integrity, and putting you in the driver's seat.</p>
                 </div>
             </div>
        </div>
    </div>
);

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    const contactInfo = [
        { icon: <LocationMarkerIcon />, title: "Our Showroom", value: "123 Luxury Lane, Metropolis, USA" },
        { icon: <PhoneIcon />, title: "Call Us", value: "(555) 123-4567" },
        { icon: <MailIcon />, title: "Email Us", value: "sales@farhashowroom.com" },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                We'd love to hear from you. Whether you have a question about our cars, pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                   {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                           <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center">
                               {item.icon}
                           </div>
                           <div>
                               <h3 className="text-lg font-bold">{item.title}</h3>
                               <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                           </div>
                       </div>
                   ))}
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeInUp" style={{animationDelay: '300ms'}}>
                    {submitted ? (
                        <div className="text-center flex flex-col items-center justify-center h-full">
                            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">Your message has been sent. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                       <form onSubmit={handleSubmit} className="space-y-6">
                           <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input type="text" name="name" id="contact-name" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>
                             <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <input type="email" name="email" id="contact-email" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea name="message" id="contact-message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full py-3 px-4 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-colors">Send Message</button>
                            </div>
                       </form>
                    )}
                </div>
            </div>
        </div>
    );
};


const CartView = ({ cart, onRemoveFromCart, onClose, onNav }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-end animate-fadeIn" onClick={onClose}>
            <div className="w-full max-w-md h-full bg-white dark:bg-gray-800 shadow-2xl flex flex-col animate-slideIn" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Your Cart</h3>
                    <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"><CloseIcon /></button>
                </div>
                {cart.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-500">Your cart is empty.</p>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cart.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex items-center gap-4">
                                <img src={item.images[0]} alt={item.model} className="w-20 h-20 object-cover rounded-md"/>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 dark:text-white">{item.make} {item.model}</h4>
                                    <p className="text-primary-500">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</p>
                                </div>
                                <button onClick={() => onRemoveFromCart(index)} className="text-red-500 hover:text-red-700 text-sm">Remove</button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="p-4 border-t dark:border-gray-700">
                    <div className="flex justify-between font-bold text-lg mb-4 text-gray-800 dark:text-white">
                        <span>Total:</span>
                        <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</span>
                    </div>
                    <button 
                        className="w-full py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 disabled:bg-gray-400 dark:disabled:bg-gray-600" 
                        disabled={cart.length === 0}
                        onClick={() => { onClose(); onNav('checkout'); }}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

const CheckoutPage = ({ cart, onPlaceOrder, onNav }) => {
    const [formData, setFormData] = useState({ name: '', email: '', address: '', paymentMethod: 'creditCard' });
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const validateForm = () => {
        const newErrors: { [key: string]: string | null } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                onPlaceOrder({ ...formData, total, items: cart });
                setIsSubmitting(false);
            }, 1500);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };
    
    if (cart.length === 0) {
        return (
            <div className="container mx-auto text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty.</h2>
                <button onClick={() => onNav('listing')} className="px-6 py-2 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700">
                    Continue Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Checkout</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                             <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${errors.name ? 'border-red-500' : ''}`} />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${errors.email ? 'border-red-500' : ''}`} />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Shipping Address</label>
                                <textarea name="address" id="address" rows={3} value={formData.address} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${errors.address ? 'border-red-500' : ''}`}></textarea>
                                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                        <div className="space-y-4">
                           <label className={`flex items-center p-4 border rounded-lg cursor-pointer ${formData.paymentMethod === 'creditCard' ? 'border-primary-500 ring-2 ring-primary-500' : 'border-gray-300 dark:border-gray-600'}`}>
                               <input type="radio" name="paymentMethod" value="creditCard" checked={formData.paymentMethod === 'creditCard'} onChange={handleChange} className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"/>
                               <span className="ml-3 flex items-center">
                                   <CreditCardIcon className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-300"/>
                                   <span className="text-sm font-medium">Credit Card</span>
                               </span>
                           </label>
                           {/* Add other payment methods like PayPal here */}
                        </div>
                    </div>
                </form>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-fit sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    <div className="space-y-4 mb-4 border-b dark:border-gray-700 pb-4">
                         {cart.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex justify-between items-center text-sm">
                                <div>
                                    <p className="font-semibold">{item.make} {item.model}</p>
                                </div>
                                <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</p>
                            </div>
                         ))}
                    </div>
                    <div className="flex justify-between font-bold text-lg mb-6">
                        <span>Total:</span>
                        <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</span>
                    </div>
                    <button onClick={handleSubmit} disabled={isSubmitting} className="w-full py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 flex items-center justify-center">
                       {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                       ) : `Pay ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

const OrderConfirmationPage = ({ orderDetails, onNav }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fadeInUp">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl max-w-2xl mx-auto">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4"/>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Thank You For Your Order!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Your order has been placed successfully. A confirmation email has been sent to <strong>{orderDetails?.email}</strong>.</p>
            <div className="text-left bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                {orderDetails?.items?.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm mb-2">
                        <span>{item.make} {item.model}</span>
                        <span className="font-mono">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</span>
                    </div>
                ))}
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t dark:border-gray-600">
                    <span>Total:</span>
                    <span className="font-mono">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(orderDetails?.total)}</span>
                </div>
            </div>
            <button onClick={() => onNav('listing')} className="px-8 py-3 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-transform transform hover:scale-105">
                Continue Shopping
            </button>
        </div>
    </div>
);


const FloatingChatButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        aria-label="Open AI Chat"
    >
        <ChatIcon />
    </button>
);


// --- Main App Component ---
const App: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [page, setPage] = useState<Page>('home');
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [cart, setCart] = useState<Car[]>([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isChatOpen, setChatOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('theme') as Theme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    const handleAddToCart = (car: Car) => {
        setCart(prevCart => [...prevCart, car]);
    };

    const handleRemoveFromCart = (index: number) => {
        setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const handleViewDetails = (car: Car) => {
        setSelectedCar(car);
        setPage('detail');
    };

    const handlePlaceOrder = (details: any) => {
        setOrderDetails(details);
        setCart([]);
        setPage('confirmation');
        window.scrollTo(0, 0);
    };

    const handleNavigate = (targetPage: Page | 'cart') => {
        if (targetPage === 'cart') {
            setCartOpen(true);
        } else {
            setPage(targetPage);
            setSelectedCar(null); 
            window.scrollTo(0, 0);
        }
    };

    const renderPage = () => {
        switch (page) {
            case 'listing':
                return <CarListingPage onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />;
            case 'detail':
                return selectedCar && <CarDetailPage car={selectedCar} onAddToCart={handleAddToCart} onBack={() => handleNavigate('listing')} />;
            case 'services':
                return <ServicePage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case 'checkout':
                return <CheckoutPage cart={cart} onPlaceOrder={handlePlaceOrder} onNav={handleNavigate} />;
            case 'confirmation':
                return orderDetails && <OrderConfirmationPage orderDetails={orderDetails} onNav={handleNavigate} />;
            case 'home':
            default:
                return <HomePage onNav={handleNavigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar theme={theme} toggleTheme={toggleTheme} onNav={handleNavigate} cartCount={cart.length} />
            <main>
                {renderPage()}
            </main>

            {isCartOpen && <CartView cart={cart} onRemoveFromCart={handleRemoveFromCart} onClose={() => setCartOpen(false)} onNav={handleNavigate} />}
            
            {!isChatOpen && <FloatingChatButton onClick={() => setChatOpen(true)} />}

            {isChatOpen && (
                 <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full h-full sm:w-[440px] sm:h-[70vh] sm:max-h-[700px] flex flex-col">
                    <div className="flex justify-end p-2 bg-transparent sm:bg-white/10 sm:backdrop-blur-md sm:rounded-t-2xl">
                         <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-300 p-1 bg-black/20 sm:bg-transparent rounded-full">
                             <CloseIcon />
                         </button>
                    </div>
                    <div className="flex-1 w-full h-full">
                         <AIChatWidget />
                    </div>
                 </div>
            )}
        </div>
    );
};

export default App;
