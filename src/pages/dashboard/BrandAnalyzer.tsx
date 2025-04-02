
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, Trophy, PieChart, BookOpen } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Define brand archetypes with descriptions
const brandArchetypes = [
  { id: "innovator", name: "The Innovator", description: "Forward-thinking, disruptive, and progressive" },
  { id: "sage", name: "The Sage", description: "Thoughtful, analytical, and wisdom-focused" },
  { id: "hero", name: "The Hero", description: "Bold, courageous, and achievement-oriented" },
  { id: "creator", name: "The Creator", description: "Imaginative, expressive, and artistic" },
  { id: "caregiver", name: "The Caregiver", description: "Nurturing, supportive, and compassionate" },
  { id: "ruler", name: "The Ruler", description: "Authoritative, structured, and controlling" },
  { id: "magician", name: "The Magician", description: "Visionary, transformative, and intuitive" },
  { id: "explorer", name: "The Explorer", description: "Adventurous, independent, and freedom-seeking" },
];

// Define questions for the brand archetype quiz
const questions = [
  {
    id: 1,
    question: "What drives your personal brand the most?",
    options: [
      { id: "a", text: "Innovation and challenging the status quo", archetype: "innovator" },
      { id: "b", text: "Sharing wisdom and expert knowledge", archetype: "sage" },
      { id: "c", text: "Making a difference and achieving goals", archetype: "hero" },
      { id: "d", text: "Expressing creativity and unique perspectives", archetype: "creator" },
    ]
  },
  {
    id: 2,
    question: "How do you primarily connect with your audience?",
    options: [
      { id: "a", text: "By nurturing and supporting them", archetype: "caregiver" },
      { id: "b", text: "By establishing clear frameworks and leadership", archetype: "ruler" },
      { id: "c", text: "By showing them new possibilities and perspectives", archetype: "magician" },
      { id: "d", text: "By inspiring them to explore new ideas", archetype: "explorer" },
    ]
  },
  {
    id: 3,
    question: "What kind of content do you enjoy creating the most?",
    options: [
      { id: "a", text: "Groundbreaking ideas and forward-thinking concepts", archetype: "innovator" },
      { id: "b", text: "Educational and informative deep-dives", archetype: "sage" },
      { id: "c", text: "Inspirational success stories and achievements", archetype: "hero" },
      { id: "d", text: "Artistic, unique, and original creations", archetype: "creator" },
    ]
  },
  {
    id: 4,
    question: "How would your audience describe your brand voice?",
    options: [
      { id: "a", text: "Supportive, warm, and helpful", archetype: "caregiver" },
      { id: "b", text: "Authoritative, confident, and structured", archetype: "ruler" },
      { id: "c", text: "Visionary, insightful, and transformative", archetype: "magician" },
      { id: "d", text: "Free-spirited, adventurous, and authentic", archetype: "explorer" },
    ]
  },
  {
    id: 5,
    question: "What's your primary goal with your personal brand?",
    options: [
      { id: "a", text: "Disrupt industries and drive change", archetype: "innovator" },
      { id: "b", text: "Share knowledge and educate others", archetype: "sage" },
      { id: "c", text: "Overcome challenges and inspire achievement", archetype: "hero" },
      { id: "d", text: "Express yourself and create original work", archetype: "creator" },
    ]
  },
];

const BrandAnalyzer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (answers[currentStep] === '') {
      toast({
        title: "Please select an option",
        description: "You need to select an answer before continuing.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      calculateResults();
      setQuizComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    // Count occurrences of each archetype in answers
    const archetypeCounts: {[key: string]: number} = {};
    
    answers.forEach((answer, index) => {
      const question = questions[index];
      const option = question.options.find(opt => opt.id === answer);
      if (option) {
        archetypeCounts[option.archetype] = (archetypeCounts[option.archetype] || 0) + 1;
      }
    });
    
    // Find the most common archetype
    let maxCount = 0;
    let resultArchetype = '';
    
    Object.entries(archetypeCounts).forEach(([archetype, count]) => {
      if (count > maxCount) {
        maxCount = count;
        resultArchetype = archetype;
      }
    });
    
    setSelectedArchetype(resultArchetype);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentStep(0);
    setAnswers(Array(questions.length).fill(''));
    setQuizComplete(false);
  };

  const getArchetypeName = (archetypeId: string) => {
    const archetype = brandArchetypes.find(a => a.id === archetypeId);
    return archetype ? archetype.name : 'Unknown';
  };

  const getArchetypeDescription = (archetypeId: string) => {
    const archetype = brandArchetypes.find(a => a.id === archetypeId);
    return archetype ? archetype.description : '';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brand Analyzer</h1>
          <p className="text-muted-foreground">Discover your authentic brand archetype and voice</p>
        </div>

        {!quizStarted ? (
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Brand Archetype Quiz</CardTitle>
              <CardDescription>
                Identify your brand archetype to better understand your unique brand voice and positioning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold">Find Your Brand Archetype</h3>
                <p className="text-muted-foreground max-w-md">
                  This interactive quiz will analyze your brand preferences and identify your primary brand archetype. 
                  This will help you craft more authentic content that resonates with your audience.
                </p>
                <Button 
                  className="mt-4 bg-brand-purple hover:bg-brand-dark-purple"
                  onClick={startQuiz}
                >
                  Start Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : !quizComplete ? (
          <Card className="dashboard-card">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Question {currentStep + 1} of {questions.length}</CardTitle>
                <Progress value={(currentStep + 1) / questions.length * 100} className="w-32 h-2" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-xl font-semibold">{questions[currentStep].question}</h3>
              
              <RadioGroup value={answers[currentStep]} onValueChange={handleAnswer} className="gap-3">
                {questions[currentStep].options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-brand-purple/50 cursor-pointer transition-all">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="border-brand-purple/30 text-foreground hover:bg-brand-purple/10"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button 
                  onClick={nextStep} 
                  className="bg-brand-purple hover:bg-brand-dark-purple"
                >
                  {currentStep === questions.length - 1 ? 'Complete Quiz' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Your Brand Archetype Results</CardTitle>
              <CardDescription>
                Based on your answers, we've identified your primary brand archetype
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-20 h-20 bg-brand-purple/20 rounded-full flex items-center justify-center mb-2">
                  <Trophy className="h-10 w-10 text-brand-purple" />
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-sm">
                  <span>Your Primary Archetype</span>
                </div>
                <h2 className="text-3xl font-bold mt-2">{selectedArchetype && getArchetypeName(selectedArchetype)}</h2>
                <p className="text-muted-foreground max-w-md">
                  {selectedArchetype && getArchetypeDescription(selectedArchetype)}
                </p>
                
                <div className="bg-muted p-4 rounded-lg mt-6 max-w-xl w-full text-left">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-brand-purple mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">What This Means For Your Brand</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Your brand archetype represents your authentic voice and positioning. Embrace this 
                        archetype in your content creation to build a more consistent and resonant personal brand.
                      </p>
                      <h4 className="font-semibold mb-2">Next Steps</h4>
                      <ul className="text-sm text-muted-foreground list-disc ml-5 space-y-1">
                        <li>Review your content strategy to align with your archetype</li>
                        <li>Use the Content Strategy tool to generate archetype-aligned content ideas</li>
                        <li>Refine your brand voice based on these insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    variant="outline" 
                    onClick={startQuiz}
                    className="border-brand-purple/30 text-foreground hover:bg-brand-purple/10"
                  >
                    Retake Quiz
                  </Button>
                  <Button 
                    className="bg-brand-purple hover:bg-brand-dark-purple"
                    onClick={() => {
                      // This would normally save the results and redirect
                      toast({
                        title: "Results Saved",
                        description: "Your brand archetype has been saved to your profile.",
                      });
                    }}
                  >
                    Save Results
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BrandAnalyzer;
