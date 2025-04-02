
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAIAssistant } from '@/contexts/AIAssistantContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const AIAssistantToggle = () => {
  const { toggleAssistant } = useAIAssistant();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={toggleAssistant}
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full bg-white border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
        >
          <Bot className="h-5 w-5" />
          <span className="sr-only">AI Assistant</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Ask AI Assistant</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default AIAssistantToggle;
