
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, Calendar, PenTool, Share2, 
  BarChart3, Settings, User, LogOut
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AIAssistant from "@/components/ai/AIAssistant";
import AIAssistantToggle from "@/components/ai/AIAssistantToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarInset,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
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

  // Get user name from context
  const firstName = user?.user_metadata?.first_name || "Demo";
  const lastName = user?.user_metadata?.last_name || "User";

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-background flex w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center h-16 px-4">
              <Link to="/" className="text-xl font-bold text-brand-purple">
                AuthorityX
              </Link>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton 
                        tooltip={item.name}
                        isActive={location.pathname === item.path}
                        asChild
                      >
                        <Link to={item.path}>
                          <item.icon className="mr-3 h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarSeparator />
            <div className="p-4">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-brand-purple flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{firstName} {lastName}</p>
                  <Button 
                    onClick={signOut}
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-muted-foreground"
                  >
                    <LogOut className="h-3 w-3 mr-1" /> Logout
                  </Button>
                </div>
              </div>
            </div>
          </SidebarFooter>
          
          <SidebarRail />
        </Sidebar>
        
        <SidebarInset>
          <div className="flex-1 relative">
            <div className="sticky top-0 z-10 flex items-center h-16 bg-background border-b border-border px-4 md:hidden">
              <SidebarTrigger />
              <div className="ml-4 text-xl font-bold text-brand-purple">AuthorityX</div>
            </div>
            
            <main>
              <div className="py-6 px-4 sm:px-6 lg:px-8">
                {children}
              </div>
              
              {/* AI Assistant Toggle */}
              <div className="fixed bottom-6 right-6 z-40">
                <AIAssistantToggle />
              </div>
              
              {/* AI Assistant Panel */}
              <AIAssistant />
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
