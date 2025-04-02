
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { format } from "date-fns";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "9:00 AM", 
  "10:00 AM", 
  "11:00 AM", 
  "1:00 PM", 
  "2:00 PM", 
  "3:00 PM", 
  "4:00 PM"
];

const brandStages = [
  "Just starting out",
  "Building my presence",
  "Established but growing",
  "Well-established brand"
];

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [brandStage, setBrandStage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { toast } = useToast();

  const resetForm = () => {
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setName("");
    setEmail("");
    setBrandStage("");
    setIsSuccess(false);
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !name || !email || !brandStage) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to book your session.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Booking successful!",
        description: `Your brand strategy session is scheduled for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}.`,
      });
    }, 1500);
  };

  const handleClose = () => {
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-background/95 backdrop-blur-sm border border-brand-purple/20">
        {isSuccess ? (
          <div className="p-6 flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl mb-4">Booking Confirmed!</DialogTitle>
            <DialogDescription className="mb-6 text-base">
              Your brand strategy session is scheduled for {selectedDate && format(selectedDate, "MMMM d, yyyy")} at {selectedTime}.
              We've sent a confirmation email to {email} with all the details.
            </DialogDescription>
            <Button onClick={handleClose} className="w-full bg-brand-purple hover:bg-brand-dark-purple">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="px-6 pt-6 pb-4 border-b">
              <DialogTitle className="text-xl font-semibold">Book Your Brand Strategy Session</DialogTitle>
              <DialogDescription>
                Select a date and time for your personalized consultation.
              </DialogDescription>
            </DialogHeader>
            
            <div className="px-6 py-4">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="date" className="font-medium">
                      Select Date
                    </Label>
                    <div className="border rounded-md p-1 mx-auto">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="p-3 pointer-events-auto"
                      />
                    </div>
                  </div>
                  
                  {selectedDate && (
                    <div className="space-y-2">
                      <Label htmlFor="time" className="font-medium">
                        Select Time
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className={`flex items-center justify-center ${
                              selectedTime === time ? "bg-brand-purple text-white" : ""
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            <Clock className="h-4 w-4 mr-1" /> {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4 flex justify-end">
                    <Button
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setStep(2)}
                      className="bg-brand-purple hover:bg-brand-dark-purple"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-md flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-brand-purple" />
                    <span>
                      {selectedDate && format(selectedDate, "MMMM d, yyyy")} at {selectedTime}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="name" className="font-medium">
                        Your Name
                      </Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-medium">
                        Email Address
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="brand-stage" className="font-medium">
                        Brand Stage
                      </Label>
                      <Select value={brandStage} onValueChange={setBrandStage}>
                        <SelectTrigger id="brand-stage">
                          <SelectValue placeholder="Select your brand stage" />
                        </SelectTrigger>
                        <SelectContent>
                          {brandStages.map((stage) => (
                            <SelectItem key={stage} value={stage}>
                              {stage}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      disabled={!name || !email || !brandStage || isSubmitting}
                      className="bg-brand-purple hover:bg-brand-dark-purple"
                    >
                      {isSubmitting ? "Booking..." : "Secure Your Brand Strategy Session"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
