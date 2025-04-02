
import { FileText, CalendarRange, Link2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const QuickActionsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link to="/dashboard/writer">
        <Card className="bg-card hover:border-brand-purple transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">Create New Post</h3>
                <p className="text-sm text-muted-foreground">Write AI-powered content</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link to="/dashboard/calendar">
        <Card className="bg-card hover:border-brand-purple transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                <CalendarRange className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">View Calendar</h3>
                <p className="text-sm text-muted-foreground">Manage your content schedule</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link to="/dashboard/settings">
        <Card className="bg-card hover:border-brand-purple transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-brand-purple/20 rounded-full flex items-center justify-center">
                <Link2 className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">Connect Accounts</h3>
                <p className="text-sm text-muted-foreground">Link your social profiles</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default QuickActionsGrid;
