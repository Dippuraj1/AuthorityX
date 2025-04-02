
import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, Loader2 } from 'lucide-react';
import { useAIAssistant } from '@/contexts/AIAssistantContext';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const AIAssistant = () => {
  const [question, setQuestion] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const {
    isAssistantVisible,
    toggleAssistant,
    askAssistant,
    isLoading,
    assistantHistory,
    clearHistory
  } = useAIAssistant();

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [assistantHistory]);

  useEffect(() => {
    // Focus input when assistant becomes visible
    if (isAssistantVisible && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isAssistantVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim() || isLoading) return;
    
    await askAssistant(question);
    setQuestion('');
  };

  if (!isAssistantVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 shadow-lg" style={{ height: '500px' }}>
      <Card className="h-full flex flex-col">
        <CardHeader className="bg-brand-purple text-white rounded-t-lg flex flex-row items-center justify-between space-y-0 py-4">
          <CardTitle className="flex items-center text-lg">
            <Sparkles className="h-5 w-5 mr-2" />
            AI Brand Assistant
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={clearHistory} 
              className="text-white hover:bg-brand-purple/20 h-8 w-8 p-0"
            >
              <Loader2 className="h-4 w-4" />
              <span className="sr-only">Clear Chat</span>
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={toggleAssistant} 
              className="text-white hover:bg-brand-purple/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex-grow overflow-hidden">
          <ScrollArea className="h-full p-4" ref={scrollRef}>
            {assistantHistory.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-72 text-center p-4 text-muted-foreground">
                <Bot className="h-12 w-12 mb-4 text-brand-purple/40" />
                <h3 className="font-medium mb-2">How can I help you today?</h3>
                <p className="text-sm">
                  Ask me about content strategy, social media planning, or brand optimization.
                </p>
                <div className="grid grid-cols-1 gap-2 mt-4 w-full">
                  {[
                    "What content should I post this week?",
                    "Analyze my brand performance",
                    "How can I improve my engagement?",
                    "What are my competitors doing?"
                  ].map((suggestion) => (
                    <Button 
                      key={suggestion} 
                      variant="outline" 
                      size="sm" 
                      className="justify-start text-xs h-auto py-2"
                      onClick={() => {
                        setQuestion(suggestion);
                        setTimeout(() => inputRef.current?.focus(), 100);
                      }}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {assistantHistory.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-end">
                      <div className="bg-muted text-foreground p-3 rounded-lg max-w-[80%]">
                        {item.question}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-brand-purple/10 p-3 rounded-lg max-w-[80%]">
                        {item.answer.split('\n').map((line, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex">
                    <div className="bg-brand-purple/10 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-2 w-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-2 w-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="p-3 border-t">
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Textarea
              ref={inputRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask your AI assistant..."
              className="flex-grow resize-none min-h-10"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={isLoading || !question.trim()}
              className="bg-brand-purple hover:bg-brand-dark-purple h-10 w-10"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIAssistant;
