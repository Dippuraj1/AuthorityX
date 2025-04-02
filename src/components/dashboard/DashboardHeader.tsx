
import { RefreshCw, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  todayDate: string;
}

const DashboardHeader = ({ todayDate }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">{todayDate}</p>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-3">
        <Button variant="outline" className="h-10">
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh
        </Button>
        <Button className="h-10 bg-brand-purple hover:bg-brand-dark-purple">
          <FileText className="h-4 w-4 mr-2" /> Generate Post
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
