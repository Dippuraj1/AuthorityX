
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import NavItems from "./navbar/NavItems";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md shadow-md py-[5px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-purple">AuthorityX</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <NavItems 
            user={user} 
            signOut={signOut}
            scrollToSection={scrollToSection}
          />
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Link to="/dashboard" className="mr-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white shadow-md hover:shadow-lg"
              >
                Dashboard
              </Button>
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-brand-purple focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - positioned fixed for better mobile experience */}
      <div className={`md:hidden fixed inset-x-0 top-16 z-50 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} transition-all duration-300 ease-in-out`}>
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          user={user}
          signOut={signOut}
          location={location}
        />
      </div>
    </nav>
  );
};

export default Navbar;
