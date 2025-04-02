
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@supabase/supabase-js";

interface UserProfileDialogProps {
  user: User | null;
  signOut: () => void;
}

const UserProfileDialog = ({ user, signOut }: UserProfileDialogProps) => {
  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!user) return "D";
    const firstName = user.user_metadata?.first_name || "D";
    const lastName = user.user_metadata?.last_name || "U";
    return firstName.charAt(0).toUpperCase() + (lastName ? lastName.charAt(0).toUpperCase() : '');
  };

  return (
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
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileDialog;
