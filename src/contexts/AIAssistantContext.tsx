
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

interface AIAssistantContextType {
  isAssistantVisible: boolean;
  toggleAssistant: () => void;
  askAssistant: (question: string) => Promise<string>;
  assistantResponse: string | null;
  isLoading: boolean;
  assistantHistory: { question: string; answer: string }[];
  clearHistory: () => void;
}

const AIAssistantContext = createContext<AIAssistantContextType | undefined>(undefined);

export function AIAssistantProvider({ children }: { children: ReactNode }) {
  const [isAssistantVisible, setIsAssistantVisible] = useState(false);
  const [assistantResponse, setAssistantResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [assistantHistory, setAssistantHistory] = useState<{ question: string; answer: string }[]>([]);

  const toggleAssistant = () => {
    setIsAssistantVisible(prev => !prev);
  };

  const askAssistant = async (question: string): Promise<string> => {
    setIsLoading(true);
    
    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = generateMockResponse(question);
      
      // Update history
      setAssistantHistory(prev => [...prev, { question, answer: response }]);
      setAssistantResponse(response);
      
      return response;
    } catch (error) {
      console.error('Error asking assistant:', error);
      toast({
        title: 'Error',
        description: 'Unable to get a response from the AI assistant',
        variant: 'destructive',
      });
      return 'Sorry, I encountered an error while processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setAssistantHistory([]);
    setAssistantResponse(null);
  };

  // Mock response generation based on question keywords
  const generateMockResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('content') && lowerQuestion.includes('strategy')) {
      return "Your content strategy should focus on creating value for your audience. I recommend starting with 2-3 pieces of high-quality content per week, focusing on your expertise areas. Would you like me to suggest some content ideas for your industry?";
    }
    
    if (lowerQuestion.includes('post') && (lowerQuestion.includes('idea') || lowerQuestion.includes('topic'))) {
      return "Here are some content ideas for your next posts:\n\n1. Industry trends and how they affect your customers\n2. Behind-the-scenes look at your company\n3. Customer success stories\n4. Tips and tutorials related to your products\n5. Answers to frequently asked questions";
    }
    
    if (lowerQuestion.includes('analytics') || lowerQuestion.includes('performance')) {
      return "Based on your recent content performance, your audience engages most with video content and posts published on Tuesday and Thursday mornings. Consider optimizing your posting schedule to these times for better reach.";
    }
    
    if (lowerQuestion.includes('competitor') || lowerQuestion.includes('competition')) {
      return "Your main competitors are focusing on educational content right now. To differentiate yourself, you might want to focus more on storytelling and case studies that showcase your unique value proposition.";
    }
    
    return "I'm your AI brand assistant. I can help with content strategy, social media planning, and brand optimization. What specific aspect of your brand would you like help with today?";
  };

  return (
    <AIAssistantContext.Provider
      value={{
        isAssistantVisible,
        toggleAssistant,
        askAssistant,
        assistantResponse,
        isLoading,
        assistantHistory,
        clearHistory,
      }}
    >
      {children}
    </AIAssistantContext.Provider>
  );
}

export const useAIAssistant = () => {
  const context = useContext(AIAssistantContext);
  
  if (context === undefined) {
    throw new Error('useAIAssistant must be used within an AIAssistantProvider');
  }
  
  return context;
};
