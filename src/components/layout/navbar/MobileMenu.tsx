
import { Link, useLocation } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserType } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserType | null;
  signOut: () => void;
  location: ReturnType<typeof useLocation>;
}

const MobileMenu = ({ isOpen, onClose, user, signOut, location }: MobileMenuProps) => {
  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user) return "D";
    const firstName = user.user_metadata?.first_name || "D";
    const lastName = user.user_metadata?.last_name || "U";
    return firstName.charAt(0).toUpperCase() + (lastName ? lastName.charAt(0).toUpperCase() : '');
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div className="bg-background/95 backdrop-blur-md shadow-lg border-t border-gray-200 animate-fade-in-up">
      <div className="px-4 pt-2 pb-3 space-y-1 max-h-[70vh] overflow-y-auto">
        {location.pathname === "/" ? (
          <>
            <button
              onClick={() => scrollToSection("features")}
              className="w-full text-left text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="w-full text-left text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="w-full text-left text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              Pricing
            </button>
          </>
        ) : null}
        <Link
          to="/blog"
          className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          onClick={onClose}
        >
          Blog
        </Link>
        <Link
          to="/dashboard"
          className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
          onClick={onClose}
        >
          Dashboard
        </Link>
        
        <div className="mt-4 border-t border-gray-200 pt-4 px-3">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.user_metadata?.avatar_url} />
              <AvatarFallback className="bg-brand-purple text-white">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">
                {user?.user_metadata?.first_name || "Demo"} {user?.user_metadata?.last_name || "User"}
              </p>
              <p className="text-xs text-muted-foreground">{user?.email || "demo@example.com"}</p>
            </div>
          </div>
          <Button
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              signOut();
              onClose();
            }}
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
