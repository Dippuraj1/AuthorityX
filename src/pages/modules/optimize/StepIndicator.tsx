
import { ReactNode } from "react";

interface StepIndicatorProps {
  currentStep: number;
  steps: Array<{
    number: number;
    label: string;
  }>;
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step) => (
          <div 
            key={step.number}
            className={`flex items-center ${currentStep >= step.number ? "text-brand-purple" : "text-muted-foreground"}`}
          >
            <div className={`
              h-8 w-8 rounded-full flex items-center justify-center mr-2 
              ${currentStep >= step.number ? "bg-brand-purple text-white" : "bg-muted text-muted-foreground"}
            `}>
              {step.number}
            </div>
            <span className="hidden sm:inline text-sm font-medium">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative h-2 bg-muted rounded-full">
        <div 
          className="absolute top-0 left-0 h-2 bg-brand-purple rounded-full transition-all"
          style={{ width: `${(currentStep - 1) * 50}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StepIndicator;
