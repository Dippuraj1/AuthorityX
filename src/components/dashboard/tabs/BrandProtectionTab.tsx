
import { Shield, AlertTriangle, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BrandProtectionTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand Protection</CardTitle>
        <CardDescription>Protect brand identity and IP</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Features</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">Logo + visual watermark recognition</p>
                  <p className="text-sm text-muted-foreground">Across web (reverse image)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">Trademark scanner</p>
                  <p className="text-sm text-muted-foreground">AI checks for potential brand/IP conflicts</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">Domain + handle protection alerts</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">AI-generated DMCA takedown templates</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Output</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">Brand protection dashboard</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">Threat level indicator</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-brand-purple/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-brand-purple" />
                </div>
                <div>
                  <p className="font-medium">Step-by-step action plan for infringements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandProtectionTab;
