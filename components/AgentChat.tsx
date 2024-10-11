"use client"

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { agentStore } from '@/stores/AgentStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

const AgentChat = () => {
  const params = useParams();
  const agentId = parseInt(params.id as string);
  const agent = agentStore.agents.find(a => a.id == agentId);

  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage('');
      // Simulate agent response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `Response from ${agent?.name}`, isUser: false }]);
      }, 1000);
    }
  };

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="bg-card p-4 text-card-foreground">
        <h1 className="text-xl font-bold">{agent.name}</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-background">
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentChat;