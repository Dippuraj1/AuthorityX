
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Calendar, PenTool, Share2, 
  BarChart3, Settings, User, Menu, X, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" },
    { icon: BarChart3, name: "Optimize", path: "/dashboard/optimize" },
    { icon: PenTool, name: "Content Strategy", path: "/dashboard/strategy" },
    { icon: Calendar, name: "Content Calendar", path: "/dashboard/calendar" },
    { icon: PenTool, name: "Content Writer", path: "/dashboard/writer" },
    { icon: Share2, name: "Post & Share", path: "/dashboard/share" },
    { icon: Settings, name: "Settings", path: "/dashboard/settings" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Get user name from context
  const firstName = user?.user_metadata?.first_name || "Demo";
  const lastName = user?.user_metadata?.last_name || "User";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar for tablet and larger */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-card border-r border-border">
        <div className="flex-1 flex flex-col min-h-0 pt-5">
          <div className="flex items-center px-4 h-16">
            <Link to="/" className="text-xl font-bold text-brand-purple">
              AuthorityX
            </Link>
          </div>
          <nav className="mt-8 flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-brand-purple/20 text-brand-purple"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-border">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-brand-purple flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{firstName} {lastName}</p>
                <button 
                  onClick={signOut}
                  className="text-xs text-muted-foreground flex items-center"
                >
                  <LogOut className="h-3 w-3 mr-1" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <Link to="/" className="text-xl font-bold text-brand-purple">
            AuthorityX
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-foreground hover:text-brand-purple focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-4 flex-1 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.path
                  ? "bg-brand-purple/20 text-brand-purple"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={toggleSidebar}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-brand-purple flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <Link to="/sign-in" className="text-xs text-muted-foreground flex items-center">
                <LogOut className="h-3 w-3 mr-1" /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex items-center h-16 bg-background border-b border-border md:hidden px-4">
          <button
            onClick={toggleSidebar}
            className="text-foreground hover:text-brand-purple focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4 text-xl font-bold text-brand-purple">AuthorityX</div>
        </div>
        <main className="flex-1">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
