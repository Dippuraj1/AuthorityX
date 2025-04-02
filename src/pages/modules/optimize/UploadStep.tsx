
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, ArrowRight } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

interface UploadStepProps {
  form: UseFormReturn<any>;
  nextStep: () => void;
}

const UploadStep = ({ form, nextStep }: UploadStepProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <FormField
        control={form.control}
        name="linkedinUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn Profile URL</FormLabel>
            <FormControl>
              <Input 
                placeholder="https://www.linkedin.com/in/yourprofile" 
                {...field} 
                className="bg-muted"
              />
            </FormControl>
            <FormDescription>
              We'll analyze your LinkedIn profile to understand your professional background.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
        <div className="mx-auto h-12 w-12 bg-muted rounded-full flex items-center justify-center mb-4">
          <Upload className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">Upload your CV or Resume</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Drag and drop your PDF or Word document here, or click to browse files.
        </p>
        <Button variant="outline" type="button">
          <Upload className="mr-2 h-4 w-4" /> Browse Files
        </Button>
      </div>

      <div className="flex justify-end">
        <Button 
          type="button" 
          className="bg-brand-purple hover:bg-brand-dark-purple"
          onClick={nextStep}
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UploadStep;
