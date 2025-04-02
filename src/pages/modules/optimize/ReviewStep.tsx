
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface ReviewStepProps {
  form: UseFormReturn<any>;
  isAnalyzing: boolean;
  prevStep: () => void;
  onSubmit: () => void;
}

const ReviewStep = ({ form, isAnalyzing, prevStep, onSubmit }: ReviewStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-muted rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Review Your Information</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">LinkedIn Profile:</h4>
            <p className="text-sm text-muted-foreground">{form.getValues().linkedinUrl || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Professional Mission:</h4>
            <p className="text-sm text-muted-foreground">{form.getValues().mission || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Target Audience:</h4>
            <p className="text-sm text-muted-foreground">{form.getValues().audience || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Communication Tone:</h4>
            <p className="text-sm text-muted-foreground capitalize">{form.getValues().tone || "Not provided"}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Industry:</h4>
            <p className="text-sm text-muted-foreground capitalize">{form.getValues().industry || "Not provided"}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline"
          onClick={prevStep}
        >
          Back
        </Button>
        <Button 
          type="submit" 
          className="bg-brand-purple hover:bg-brand-dark-purple"
          disabled={isAnalyzing}
          onClick={onSubmit}
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Brand"} 
          {!isAnalyzing && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
