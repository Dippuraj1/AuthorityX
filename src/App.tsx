
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Dashboard from "@/pages/Dashboard";
import Optimize from "@/pages/modules/Optimize";
import Blog from "@/pages/Blog";
import Privacy from "@/pages/Privacy";
import Security from "@/pages/Security";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Auth check - simple implementation for demo purposes
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("authorityx-authenticated") === "true";
  
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/sign-in";
    }
  }, [isAuthenticated]);
  
  return isAuthenticated ? <>{children}</> : null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/dashboard/optimize" element={<PrivateRoute><Optimize /></PrivateRoute>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
