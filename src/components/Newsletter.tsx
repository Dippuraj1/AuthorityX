
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our newsletter at " + email,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="bg-card/40 backdrop-blur-md shadow-lg rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Join our newsletter for expert tips, updates, and exclusive insights on personal branding.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-muted/50 backdrop-blur-sm border border-solid border-[#999999] border-[1.5px] focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all duration-300"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-purple hover:bg-brand-dark-purple text-white transition-all duration-300 transform hover:translate-x-1"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
