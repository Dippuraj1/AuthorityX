
import { useState } from "react";
import { Save, Bell, Lock, Globe, User, Shield, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Settings = () => {
  const { toast } = useToast();
  const [profileForm, setProfileForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    bio: "Personal brand strategist and digital marketing consultant."
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully."
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and settings</p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full md:w-auto">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock className="h-4 w-4" /> Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Billing
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> Integrations
            </TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and public profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={profileForm.firstName} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={profileForm.lastName} 
                      onChange={handleProfileChange} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={profileForm.email} 
                    onChange={handleProfileChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input 
                    id="bio" 
                    name="bio" 
                    value={profileForm.bio} 
                    onChange={handleProfileChange} 
                  />
                  <p className="text-xs text-muted-foreground">This will be displayed on your public profile</p>
                </div>
                <Button 
                  className="bg-brand-purple hover:bg-brand-purple/90"
                  onClick={handleSaveProfile}
                >
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Email Notifications</h4>
                      <p className="text-xs text-muted-foreground">Receive emails about activity and updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Content Reminders</h4>
                      <p className="text-xs text-muted-foreground">Get reminded about scheduled content</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Analytics Digests</h4>
                      <p className="text-xs text-muted-foreground">Weekly reports on your content performance</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Product Updates</h4>
                      <p className="text-xs text-muted-foreground">Learn about new features and improvements</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button 
                  className="bg-brand-purple hover:bg-brand-purple/90"
                  onClick={() => toast({
                    title: "Notification preferences updated",
                    description: "Your notification settings have been saved."
                  })}
                >
                  <Save className="w-4 h-4 mr-2" /> Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button 
                    className="bg-brand-purple hover:bg-brand-purple/90"
                    onClick={() => toast({
                      title: "Password updated",
                      description: "Your password has been changed successfully."
                    })}
                  >
                    <Shield className="w-4 h-4 mr-2" /> Update Password
                  </Button>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Enable 2FA</h4>
                      <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Billing Tab */}
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Subscription & Billing</CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-brand-purple/10 border border-brand-purple/20 rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium">Pro Plan</h3>
                      <span className="text-xs font-medium bg-brand-purple text-white px-2 py-1 rounded-full">Active</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Your subscription renews on September 30, 2023</p>
                    <div className="flex">
                      <Button variant="outline" size="sm" className="mr-2">View Invoice History</Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Cancel Subscription</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <CreditCard className="h-8 w-8 mr-3 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Visa ending in 4242</p>
                          <p className="text-xs text-muted-foreground">Expires 12/2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => toast({
                        title: "Coming soon",
                        description: "This feature will be available in the next update."
                      })}
                    >
                      Add Payment Method
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Integrations Tab */}
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Connected Services</CardTitle>
                <CardDescription>Manage your social media and external service connections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "Instagram", connected: true, icon: "Instagram" },
                    { name: "Twitter", connected: true, icon: "Twitter" },
                    { name: "LinkedIn", connected: false, icon: "Linkedin" },
                    { name: "Facebook", connected: false, icon: "Facebook" },
                    { name: "TikTok", connected: false, icon: "Music" }
                  ].map((service) => (
                    <div key={service.name} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-brand-purple">{service.icon}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{service.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {service.connected ? "Connected" : "Not connected"}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {service.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
