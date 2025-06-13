
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ChatMessage {
  id: number;
  jobId: number;
  senderId: string;
  senderType: 'customer' | 'worker';
  message: string;
  timestamp: string;
}

interface ChatContextType {
  messages: ChatMessage[];
  sendMessage: (jobId: number, senderId: string, senderType: 'customer' | 'worker', message: string) => void;
  getMessagesByJob: (jobId: number) => ChatMessage[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Mock initial messages
const initialMessages: ChatMessage[] = [
  {
    id: 1,
    jobId: 1,
    senderId: 'Sarah Johnson',
    senderType: 'customer',
    message: 'Hi, when can you come to fix the faucet?',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    jobId: 1,
    senderId: 'John Smith',
    senderType: 'worker',
    message: 'I can come tomorrow morning around 10 AM. Is that good for you?',
    timestamp: '1 hour ago'
  }
];

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const sendMessage = (jobId: number, senderId: string, senderType: 'customer' | 'worker', message: string) => {
    const newMessage: ChatMessage = {
      id: Math.max(...messages.map(m => m.id), 0) + 1,
      jobId,
      senderId,
      senderType,
      message,
      timestamp: 'Just now'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getMessagesByJob = (jobId: number) => {
    return messages.filter(message => message.jobId === jobId);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      sendMessage,
      getMessagesByJob
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};