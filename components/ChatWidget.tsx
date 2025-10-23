import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'agent';
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const { t } = useI18n();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                { id: 1, text: t('chat.welcomeMessage'), sender: 'agent' }
            ]);
        }
    }, [isOpen, messages.length, t]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newUserMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');

        // Simulate agent reply
        setTimeout(() => {
            const agentReply: Message = {
                id: Date.now() + 1,
                text: t('chat.agentReply'),
                sender: 'agent',
            };
            setMessages(prev => [...prev, agentReply]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 end-6 z-50">
            {/* Chat Window */}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-80 sm:w-96 h-[30rem] sm:h-[32rem] bg-white rounded-xl shadow-2xl flex flex-col border border-border">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 bg-graphite text-white rounded-t-xl">
                        <h3 className="font-bold font-heading">{t('chat.title')}</h3>
                        <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-teal text-white rounded-br-none' : 'bg-background-light text-text-DEFAULT rounded-bl-none'}`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={t('chat.inputPlaceholder')}
                                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                            />
                            <button type="submit" className="bg-teal text-white p-3 rounded-lg font-semibold hover:opacity-90 transition-colors flex-shrink-0">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-110 mt-4 ${isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                aria-label="Open chat"
            >
                <MessageSquare size={30} />
            </button>
        </div>
    );
};

export default ChatWidget;