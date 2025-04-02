
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast({
        title: "Terms Required",
        description: "You must agree to the terms and conditions to create an account.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      if (name && email && password) {
        localStorage.setItem("authorityx-authenticated", "true");
        toast({
          title: "Account created!",
          description: "Welcome to AuthorityX. Your account has been created successfully.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Registration Failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialSignUp = () => {
    setIsLoading(true);
    
    // Simulate LinkedIn authentication
    setTimeout(() => {
      localStorage.setItem("authorityx-authenticated", "true");
      toast({
        title: "Account created!",
        description: "Your account has been created with LinkedIn.",
      });
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-deeper-purple px-4 py-12">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Create an account</h2>
          <p className="text-muted-foreground">Start your personal branding journey with AuthorityX</p>
        </div>

        <Card className="bg-card shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Enter your details to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-muted border-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-muted border-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-muted border-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                />
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreeTerms} 
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)} 
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link to="/terms" className="text-brand-purple hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-brand-purple hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-brand-purple hover:bg-brand-dark-purple"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-muted"
                  onClick={handleSocialSignUp}
                  disabled={isLoading}
                >
                  <Linkedin className="mr-2 h-5 w-5 text-[#0A66C2]" />
                  Sign up with LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-brand-purple hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
