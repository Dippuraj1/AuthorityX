
import { createContext, useContext, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
};

// Create a mock user and session for development
const mockUser: User = {
  id: "mock-user-id",
  app_metadata: {},
  user_metadata: {
    first_name: "Demo",
    last_name: "User",
  },
  aud: "authenticated",
  created_at: new Date().toISOString(),
  email: "demo@example.com",
  role: "authenticated",
};

const mockSession: Session = {
  access_token: "mock-access-token",
  refresh_token: "mock-refresh-token",
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  token_type: "bearer",
  user: mockUser,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with mock user and session
  const [user] = useState<User | null>(mockUser);
  const [session] = useState<Session | null>(mockSession);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Mock authentication functions
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      toast({
        title: "Welcome back!",
        description: "You have been automatically signed in.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error signing in",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      setLoading(true);
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error signing up",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      toast({
        title: "Signed out",
        description: "You have been signed out.",
      });
      // In a real app, we would clear the user/session here
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
