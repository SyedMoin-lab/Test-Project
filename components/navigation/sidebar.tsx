"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Briefcase, 
  Globe2, 
  FileText, 
  User,
  Settings,
  Upload
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Sidebar() {
  const pathname = usePathname();
  const { toast } = useToast();
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOC/DOCX file",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsResumeDialogOpen(false);
          toast({
            title: "Resume uploaded successfully",
            description: "Your resume has been uploaded and is ready for review",
          });
          return 0;
        }
        return prev + 10;
      });
    }, 300);
  };

  const navigationItems = [
    { href: "/", label: "Jobs", icon: Briefcase },
    { href: "/interview", label: "AI Mock Interview", icon: Globe2 },
    { href: "#", label: "Resume", icon: FileText, onClick: () => setIsResumeDialogOpen(true) },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Setting", icon: Settings },
  ];

  return (
    <aside className="w-full md:w-[200px] bg-white border-r border-gray-100 py-6">
      <div className="px-4 mb-8">
        <Link href="/">
          <div className="bg-gradient-to-br from-[#A855F7] to-[#9333EA] rounded-lg p-3 flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-white" />
            <span className="text-base font-semibold text-white">JOBNOVA</span>
          </div>
        </Link>
      </div>

      <div className="px-4 text-xs text-gray-400 mb-2">Menu</div>

      <nav className="space-y-1 px-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start h-10 text-sm font-medium transition-colors
                ${isActive 
                  ? "bg-[#8B5CF6] bg-opacity-10 text-[#8B5CF6]" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              onClick={item.onClick}
              asChild={!item.onClick}
            >
              {item.onClick ? (
                <div className="flex items-center">
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </div>
              ) : (
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="absolute bottom-6 px-4 w-[200px]">
        <Link href="/pricing">
          <Card className="bg-gradient-to-br from-[#A855F7] to-[#D8B4FE] rounded-xl p-4 text-white hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-1">Upgrade your plan</h3>
            <p className="text-sm text-purple-200 mb-3">Let our advanced AI help you!</p>
            <Button className="w-full bg-white text-[#A855F7] hover:bg-gray-50 h-10 text-sm font-medium">
              Subscription
            </Button>
          </Card>
        </Link>
      </div>

      <Dialog open={isResumeDialogOpen} onOpenChange={setIsResumeDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Upload Resume</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label
                htmlFor="resume-upload"
                className="cursor-pointer relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2"
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <span className="mt-2 block text-sm font-semibold text-gray-900">
                  Upload your resume
                </span>
                <span className="mt-2 block text-xs text-gray-500">
                  PDF, DOC, or DOCX up to 10MB
                </span>
                <input
                  id="resume-upload"
                  name="resume"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileUpload}
                />
              </label>
              {isUploading && (
                <div className="space-y-2">
                  <Progress value={uploadProgress} className="w-full" />
                  <p className="text-sm text-gray-500 text-center">{uploadProgress}% uploaded</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </aside>
  );
}