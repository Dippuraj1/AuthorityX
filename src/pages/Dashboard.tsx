
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BrandArchetypeCard from "@/components/dashboard/BrandArchetypeCard";
import PerformanceMetricsCard from "@/components/dashboard/PerformanceMetricsCard";
import QuickActionsGrid from "@/components/dashboard/QuickActionsGrid";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

const Dashboard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(68), 500);
    return () => clearTimeout(timer);
  }, []);

  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardHeader todayDate={todayDate} />
        <BrandArchetypeCard progress={progress} />
        <PerformanceMetricsCard />
        <QuickActionsGrid />
        <DashboardTabs />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
