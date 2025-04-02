
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      if (email && password) {
        // This is just a demo - in a real app we would validate credentials properly
        localStorage.setItem("authorityx-authenticated", "true");
        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = () => {
    setIsLoading(true);
    
    // Simulate LinkedIn authentication
    setTimeout(() => {
      localStorage.setItem("authorityx-authenticated", "true");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-deeper-purple px-4 py-12">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-muted-foreground">Sign in to your AuthorityX account</p>
        </div>

        <Card className="bg-card shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-brand-purple hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-muted border-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe} 
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                />
                <Label htmlFor="remember" className="text-sm">Remember me for 30 days</Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-brand-purple hover:bg-brand-dark-purple"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
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
                  onClick={handleSocialLogin}
                  disabled={isLoading}
                >
                  <Linkedin className="mr-2 h-5 w-5 text-[#0A66C2]" />
                  Sign in with LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-brand-purple hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
