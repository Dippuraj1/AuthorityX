
import { useState, useRef, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSource?: string;
  videoTitle?: string;
  videoDescription?: string;
}

const VideoModal = ({ 
  open, 
  onOpenChange, 
  videoSource = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
  videoTitle = "See AuthorityX in Action",
  videoDescription = "Watch how AuthorityX helps professionals build their personal brand with AI-powered tools." 
}: VideoModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (open) {
      setIsLoading(true);
    }
  }, [open]);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl w-[90vw] p-0 overflow-hidden bg-background">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl text-left">{videoTitle}</DialogTitle>
          <DialogDescription className="text-left mt-2">
            {videoDescription}
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="relative aspect-video w-full border-t border-border mt-2">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <div className="w-8 h-8 border-2 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={videoSource}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Demo Video"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
