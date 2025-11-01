import React, { useState, useEffect } from 'react';
import config from '../config';
import Logo from './Logo';

const WhatsAppIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const ContactFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  
  const welcomeMessage = "Hi there! 👋 How can our engineering team help you with your composite needs today?";

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.scrollY > 300;
      setIsVisible(shouldBeVisible);
      if (!shouldBeVisible) setIsOpen(false); // Close widget when it scrolls out of view
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.supportPhone.replace(/\s+/g, '').replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative">
      {/* Chat Window */}
      <div
        className={`
          w-[calc(100vw-3rem)] max-w-sm h-auto bg-[var(--color-surface-primary)] rounded-[var(--radius)] shadow-xl border border-[var(--color-border)] flex flex-col
          transition-[transform,opacity] duration-300 ease-in-out origin-bottom-right absolute bottom-[calc(100%+1rem)] right-0
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="p-4 bg-black/30 text-white flex items-center gap-3 rounded-t-lg backdrop-blur-sm">
          <Logo className="h-10 w-auto" />
          <div>
            <h3 className="font-bold text-lg">EMPHZ Support</h3>
            <p className="text-xs text-white/70">Typically replies within minutes</p>
          </div>
        </div>
        <div className="p-4 flex-grow bg-[var(--color-background)]">
          <div className="bg-[var(--color-surface-primary)] p-3 rounded-lg shadow-sm text-[var(--color-text-primary)] max-w-xs">
            <p className="text-sm">{welcomeMessage}</p>
          </div>
        </div>
        <form onSubmit={handleSendMessage} className="p-3 border-t border-[var(--color-border)] bg-[var(--color-surface-primary)] flex items-center gap-2 rounded-b-lg">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow w-full px-3 py-2 border rounded-full focus:ring-2 focus:ring-[var(--color-brand)]/50 focus:border-[var(--color-brand)] transition-colors duration-200 text-sm bg-white text-[var(--color-text-dark)] placeholder:text-gray-400 border-[var(--color-border)]"
            aria-label="Your message"
          />
          <button
            type="submit"
            aria-label="Start Chat on WhatsApp"
            className="flex-shrink-0 bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full transition-transform transform hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="none"><path d="M16.6,14.2l-1.5-0.7c-0.2-0.1-0.4-0.1-0.6,0.1l-0.7,0.8c-1.4-0.8-2.6-2-3.4-3.4l0.8-0.7c0.2-0.2,0.2-0.4,0.1-0.6 l-0.7-1.5c-0.1-0.3-0.4-0.5-0.7-0.5h-1.6c-0.4,0-0.7,0.3-0.7,0.7c0,0.1,0,2.1,1.9,4.1c1.9,1.9,3.9,2,4.1,1.9 c0.4,0,0.7-0.3,0.7-0.7v-1.6C17.1,14.6,16.9,14.3,16.6,14.2z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z"/></svg>
          </button>
        </form>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-white text-black shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
        aria-expanded={isOpen}
      >
        {isOpen ? <CloseIcon/> : <WhatsAppIcon />}
      </button>
    </div>
  );
};

export default ContactFAB;