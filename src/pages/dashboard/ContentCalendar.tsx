
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, FileText, Link2, RefreshCw, CheckCircle, CalendarRange } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const { toast } = useToast();

  const handleOptimizeSchedule = () => {
    toast({
      title: "Schedule Optimized",
      description: "Your content schedule has been optimized for maximum engagement.",
    });
  };

  const scheduledContent = [
    {
      date: "2023-11-15",
      time: "9:00 AM",
      title: "Product Feature Highlight",
      type: "Carousel",
      platform: "Instagram",
      status: "scheduled",
    },
    {
      date: "2023-11-15",
      time: "12:30 PM",
      title: "Industry Insights Newsletter",
      type: "Blog",
      platform: "LinkedIn",
      status: "scheduled",
    },
    {
      date: "2023-11-16",
      time: "3:45 PM",
      title: "Customer Success Story",
      type: "Video",
      platform: "LinkedIn",
      status: "draft",
    },
    {
      date: "2023-11-18",
      time: "10:15 AM",
      title: "Product Tutorial",
      type: "Reel",
      platform: "Instagram",
      status: "scheduled",
    },
    {
      date: "2023-11-20",
      time: "2:00 PM",
      title: "Company Update",
      type: "Blog",
      platform: "LinkedIn",
      status: "scheduled",
    },
  ];

  const integrations = [
    {
      name: "Notion",
      connected: true,
      lastSync: "2 hours ago",
    },
    {
      name: "Google Calendar",
      connected: true,
      lastSync: "1 day ago",
    },
    {
      name: "Trello",
      connected: false,
      lastSync: "Never",
    },
  ];

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
            Scheduled
          </div>
        );
      case "draft":
        return (
          <div className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
            Draft
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
            {status}
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-muted-foreground">
            Schedule and manage content across platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Content Schedule</CardTitle>
                  <CardDescription>Manage your upcoming content</CardDescription>
                </div>
                <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledContent
                  .filter(item => selectedPlatform === "all" || item.platform.toLowerCase() === selectedPlatform)
                  .map((content, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-md hover:bg-muted/50 transition-colors">
                      <div className="flex-grow">
                        <div className="flex items-center mb-1">
                          <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{content.date}</span>
                          <Clock className="h-4 w-4 mx-2 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{content.time}</span>
                        </div>
                        <h3 className="font-medium">{content.title}</h3>
                        <div className="flex items-center mt-1">
                          <div className="text-xs bg-muted px-2 py-0.5 rounded mr-2">
                            {content.type}
                          </div>
                          <div className="text-xs bg-muted px-2 py-0.5 rounded">
                            {content.platform}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 items-center">
                        {renderStatusBadge(content.status)}
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Content</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view content</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="border rounded-md"
              />
              <div className="mt-4 pt-4 border-t">
                <Button className="w-full mb-2 bg-brand-purple hover:bg-brand-dark-purple" onClick={handleOptimizeSchedule}>
                  <RefreshCw className="h-4 w-4 mr-2" /> Optimize Schedule
                </Button>
                <Button variant="outline" className="w-full">
                  <CalendarRange className="h-4 w-4 mr-2" /> Add Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="calendar">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="platforms">Platform Status</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calendar" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Calendar View</CardTitle>
                <CardDescription>Drag and drop to reschedule content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium border-b pb-2">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mt-2">
                  {Array.from({ length: 35 }).map((_, index) => {
                    const day = index - 3; // Offset to start the month on the correct day
                    return (
                      <div 
                        key={index} 
                        className={`aspect-square border rounded-md p-1 text-xs ${
                          day <= 0 || day > 30 ? "bg-muted/50 text-muted-foreground" : ""
                        } ${day === 15 || day === 16 || day === 18 || day === 20 ? "border-brand-purple" : ""}`}
                      >
                        <div className="text-right font-medium">
                          {day > 0 && day <= 30 ? day : ""}
                        </div>
                        <div className="mt-1">
                          {day === 15 && (
                            <>
                              <div className="h-1.5 w-full bg-blue-500 rounded-sm mb-1"></div>
                              <div className="h-1.5 w-full bg-green-500 rounded-sm"></div>
                            </>
                          )}
                          {day === 16 && (
                            <div className="h-1.5 w-full bg-purple-500 rounded-sm"></div>
                          )}
                          {day === 18 && (
                            <div className="h-1.5 w-full bg-orange-500 rounded-sm"></div>
                          )}
                          {day === 20 && (
                            <div className="h-1.5 w-full bg-blue-500 rounded-sm"></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-3">
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs">Blog</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">LinkedIn</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                      <span className="text-xs">Video</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                      <span className="text-xs">Instagram</span>
                    </div>
                  </div>
                  <Select defaultValue="november">
                    <SelectTrigger className="w-[130px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="october">October</SelectItem>
                      <SelectItem value="november">November</SelectItem>
                      <SelectItem value="december">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="platforms" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Publishing Status</CardTitle>
                <CardDescription>Monitor your content across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted px-4 py-3 font-medium flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <span className="text-blue-800 text-xs font-bold">in</span>
                        </div>
                        <span>LinkedIn</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        Connected
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Scheduled Posts:</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Optimal Posting Time:</span>
                        <span className="font-medium">Tue/Thu 10-11 AM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Published:</span>
                        <span className="font-medium">Today at 9:45 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted px-4 py-3 font-medium flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                          <span className="text-pink-800 text-xs font-bold">ig</span>
                        </div>
                        <span>Instagram</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        Connected
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Scheduled Posts:</span>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Optimal Posting Time:</span>
                        <span className="font-medium">Mon/Fri 6-7 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Published:</span>
                        <span className="font-medium">Yesterday at 6:30 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted px-4 py-3 font-medium flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <span className="text-blue-800 text-xs font-bold">tw</span>
                        </div>
                        <span>Twitter</span>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                        Reconnect Required
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Scheduled Posts:</span>
                        <span className="font-medium">0</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Optimal Posting Time:</span>
                        <span className="font-medium">--</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Published:</span>
                        <span className="font-medium">--</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tool Integrations</CardTitle>
                <CardDescription>Connect your productivity tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {integrations.map((integration) => (
                    <div key={integration.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center mr-4">
                          <Link2 className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium">{integration.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            Last synced: {integration.lastSync}
                          </p>
                        </div>
                      </div>
                      <div>
                        {integration.connected ? (
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <RefreshCw className="h-4 w-4 mr-1" /> Sync
                            </Button>
                            <Button variant="ghost" size="sm">
                              Disconnect
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" className="bg-brand-purple hover:bg-brand-dark-purple">
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Smart Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Auto-scheduling based on engagement windows</p>
                          <p className="text-xs text-muted-foreground">Posts are automatically scheduled for optimal times</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Cross-platform synchronization</p>
                          <p className="text-xs text-muted-foreground">Content status synced across connected platforms</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Smart reminders & dependency mapping</p>
                          <p className="text-xs text-muted-foreground">Get notified when related content needs attention</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ContentCalendar;
