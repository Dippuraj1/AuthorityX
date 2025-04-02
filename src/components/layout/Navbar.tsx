import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  // Handle scroll for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-[14px] ${
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-purple">AuthorityX</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {location.pathname === "/" && (
              <>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Pricing
                </button>
              </>
            )}
            <Link
              to="/blog"
              className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              Blog
            </Link>
            
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button 
                  variant="outline" 
                  className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300"
                >
                  Dashboard
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger>
                  <Avatar className="cursor-pointer border-2 border-transparent hover:border-brand-purple transition-all duration-300">
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-brand-purple text-white">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-md border border-white/10">
                  <DialogHeader>
                    <DialogTitle>Profile</DialogTitle>
                    <DialogDescription>
                      Manage your account settings
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={user?.user_metadata?.avatar_url} />
                        <AvatarFallback className="bg-brand-purple text-white text-xl">
                          {getUserInitials()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg font-medium">
                          {user?.user_metadata?.first_name || "Demo"} {user?.user_metadata?.last_name || "User"}
                        </p>
                        <p className="text-sm text-muted-foreground">{user?.email || "demo@example.com"}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-2"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex md:hidden items-center">
            <Link to="/dashboard" className="mr-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/90 backdrop-blur-md animate-scale-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
            >
              Blog
            </Link>
            <div className="px-3 py-2">
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
                variant="outline" 
                size="sm"
                className="w-full"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
