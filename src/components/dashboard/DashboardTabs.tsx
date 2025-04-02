
import { Share2, PenTool, BarChart3, MessageCircle, Shield } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PostShareTab from "./tabs/PostShareTab";
import AIWriterTab from "./tabs/AIWriterTab";
import AnalyticsTab from "./tabs/AnalyticsTab";
import BrandReputationTab from "./tabs/BrandReputationTab";
import BrandProtectionTab from "./tabs/BrandProtectionTab";

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="post_share" className="w-full">
      <TabsList className="grid grid-cols-5 mb-4">
        <TabsTrigger value="post_share" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" /> Post & Share
        </TabsTrigger>
        <TabsTrigger value="ai_writer" className="flex items-center gap-2">
          <PenTool className="h-4 w-4" /> AI Writer
        </TabsTrigger>
        <TabsTrigger value="analytics" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" /> Analytics
        </TabsTrigger>
        <TabsTrigger value="brand_reputation" className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" /> Brand Reputation
        </TabsTrigger>
        <TabsTrigger value="brand_protection" className="flex items-center gap-2">
          <Shield className="h-4 w-4" /> Brand Protection
        </TabsTrigger>
      </TabsList>
      
      {/* Post & Share Tab */}
      <TabsContent value="post_share">
        <PostShareTab />
      </TabsContent>
      
      {/* AI Writer Tab */}
      <TabsContent value="ai_writer">
        <AIWriterTab />
      </TabsContent>
      
      {/* Analytics Tab */}
      <TabsContent value="analytics">
        <AnalyticsTab />
      </TabsContent>
      
      {/* Brand Reputation Tab */}
      <TabsContent value="brand_reputation">
        <BrandReputationTab />
      </TabsContent>
      
      {/* Brand Protection Tab */}
      <TabsContent value="brand_protection">
        <BrandProtectionTab />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
