
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    if (dropdownOpen === name) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(name);
    }
  };

  return (
    <nav className="bg-background/90 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-purple">AuthorityX</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="relative" onMouseLeave={() => setDropdownOpen(null)}>
              <button
                onMouseEnter={() => toggleDropdown('features')}
                className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium flex items-center"
              >
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen === 'features' && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-card ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="py-1">
                    <Link
                      to="/features/optimize"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Brand Analyzer
                    </Link>
                    <Link
                      to="/features/strategy"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Content Strategy
                    </Link>
                    <Link
                      to="/features/calendar"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Content Calendar
                    </Link>
                    <Link
                      to="/features/writer"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Content Writer
                    </Link>
                    <Link
                      to="/features/share"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      Post & Share
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/pricing"
              className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              to="/sign-in"
              className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium"
            >
              Sign In
            </Link>
            <Link to="/sign-up" className="">
              <Button className="bg-brand-purple hover:bg-brand-dark-purple text-white">
                Get Started Free
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-brand-purple focus:outline-none"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card animate-scale-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => toggleDropdown('features-mobile')}
              className="w-full text-left text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              Features <ChevronDown className="inline ml-1 h-4 w-4" />
            </button>
            {dropdownOpen === 'features-mobile' && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/features/optimize"
                  className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-sm"
                >
                  Brand Analyzer
                </Link>
                <Link
                  to="/features/strategy"
                  className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-sm"
                >
                  Content Strategy
                </Link>
                <Link
                  to="/features/calendar"
                  className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-sm"
                >
                  Content Calendar
                </Link>
                <Link
                  to="/features/writer"
                  className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-sm"
                >
                  Content Writer
                </Link>
                <Link
                  to="/features/share"
                  className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-sm"
                >
                  Post & Share
                </Link>
              </div>
            )}
            <Link
              to="/pricing"
              className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              to="/sign-in"
              className="text-foreground hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-brand-purple hover:bg-brand-dark-purple text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
