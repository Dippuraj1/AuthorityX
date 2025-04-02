
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import { AuthProvider } from "@/contexts/AuthContext";
import { AIAssistantProvider } from "@/contexts/AIAssistantContext";

// Dashboard feature pages
import BrandAnalyzer from "@/pages/dashboard/BrandAnalyzer";
import BrandAnalyzerModule from "@/pages/modules/BrandAnalyzer";
import ContentStrategy from "@/pages/dashboard/ContentStrategy";
import ContentCalendar from "@/pages/dashboard/ContentCalendar";
import ContentWriter from "@/pages/dashboard/ContentWriter";
import PostShare from "@/pages/dashboard/PostShare";
import Settings from "@/pages/dashboard/Settings";

const queryClient = new QueryClient();

// Temporarily bypass authentication checks
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // Always render children without checking auth
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <AIAssistantProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<Dashboard />} /> {/* Redirect to dashboard */}
              <Route path="/sign-up" element={<Dashboard />} /> {/* Redirect to dashboard */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Protected routes - now directly accessible */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/optimize" element={<Optimize />} />
              <Route path="/dashboard/brand-analyzer" element={<BrandAnalyzer />} />
              <Route path="/dashboard/strategy" element={<ContentStrategy />} />
              <Route path="/dashboard/calendar" element={<ContentCalendar />} />
              <Route path="/dashboard/writer" element={<ContentWriter />} />
              <Route path="/dashboard/share" element={<PostShare />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              
              {/* Module pages */}
              <Route path="/modules/brand-analyzer" element={<BrandAnalyzerModule />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AIAssistantProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
