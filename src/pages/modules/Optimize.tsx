
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

// Import our new components
import StepIndicator from "./optimize/StepIndicator";
import UploadStep from "./optimize/UploadStep";
import QuestionnaireStep from "./optimize/QuestionnaireStep";
import ReviewStep from "./optimize/ReviewStep";
import BrandResults from "./optimize/BrandResults";
import { BrandAnalyzerFormValues } from "./optimize/types";

const Optimize = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<BrandAnalyzerFormValues>({
    defaultValues: {
      linkedinUrl: "",
      mission: "",
      audience: "",
      tone: "professional",
      industry: "",
      goals: [],
    },
  });

  const onSubmit = (data: BrandAnalyzerFormValues) => {
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast({
        title: "Analysis Complete",
        description: "Your brand archetype has been identified.",
      });
    }, 2000);
  };
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Steps for the indicator
  const steps = [
    { number: 1, label: "Upload" },
    { number: 2, label: "Questionnaire" },
    { number: 3, label: "Review" }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brand Analyzer</h1>
          <p className="text-muted-foreground">Discover your authentic brand voice and personality</p>
        </div>

        {!showResults ? (
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Brand Analysis Questionnaire</CardTitle>
              <CardDescription>
                Complete the following steps to analyze your personal brand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StepIndicator currentStep={currentStep} steps={steps} />

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {currentStep === 1 && (
                    <UploadStep form={form} nextStep={nextStep} />
                  )}

                  {currentStep === 2 && (
                    <QuestionnaireStep form={form} nextStep={nextStep} prevStep={prevStep} />
                  )}

                  {currentStep === 3 && (
                    <ReviewStep form={form} isAnalyzing={isAnalyzing} prevStep={prevStep} onSubmit={form.handleSubmit(onSubmit)} />
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        ) : (
          <BrandResults onEditResponses={() => setShowResults(false)} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Optimize;
