"use client";

import { Sidebar } from "@/components/navigation/sidebar";
import { JobList } from "@/components/jobs/job-list";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <JobList />
    </div>
  );
}