import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UserProfileDialog from "./UserProfileDialog";
import { User } from "@supabase/supabase-js";
interface NavItemsProps {
  user: User | null;
  signOut: () => void;
  scrollToSection: (sectionId: string) => void;
}
const NavItems = ({
  user,
  signOut,
  scrollToSection
}: NavItemsProps) => {
  const location = useLocation();
  return <div className="hidden md:flex md:items-center md:space-x-6">
      {location.pathname === "/" && <>
          <button onClick={() => scrollToSection("features")} className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300">
            Features
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300">
            Pricing
          </button>
        </>}
      <Link to="/blog" className="text-foreground hover:text-brand-purple px-3 py-2 text-sm font-medium transition-all duration-300">
        Blog
      </Link>
      
      <div className="flex items-center gap-4">
        <Link to="/dashboard">
          <Button variant="outline" className="border-brand-purple transition-all duration-300 text-purple-50 bg-purple-800 hover:bg-purple-700 rounded-xl">
            Dashboard
          </Button>
        </Link>
        <UserProfileDialog user={user} signOut={signOut} />
      </div>
    </div>;
};
export default NavItems;