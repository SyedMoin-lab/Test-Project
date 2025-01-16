"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Globe2, 
  Heart, 
  Share2, 
  Clock, 
  Users,
  RefreshCw,
  Sparkles,
  CheckCircle,
  Clipboard
} from "lucide-react";

export function JobList() {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="outline" className="rounded-full px-6 h-8 text-sm font-medium border-[#8B5CF6] text-[#8B5CF6]">
            Matched
          </Button>
          <Button variant="ghost" className="rounded-full px-6 h-8 text-sm font-medium text-gray-500">
            Liked <Badge className="ml-2 bg-[#4ADE80] text-white text-xs">1</Badge>
          </Button>
          <Button variant="ghost" className="rounded-full px-6 h-8 text-sm font-medium text-gray-500">
            Applied <Badge className="ml-2 bg-[#4ADE80] text-white text-xs">1</Badge>
          </Button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <Button className="flex-1 bg-purple-500 text-white rounded-full py-2 hover:bg-purple-600 flex items-center justify-center text-sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Change Job Reference
          </Button>
          <Button className="bg-white text-purple-500 text-sm ml-4 rounded-full flex items-center border border-purple-500 py-1 px-3">
            <CheckCircle className="mr-1 h-4 w-4" />
            <span>Top matched</span>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Job Listings */}
          <div className="col-span-2 space-y-4">
            {[
              { match: 93, company: "Google Inc.", logo: "google" },
              { match: 64, company: "Uber Inc.", logo: "uber" },
              { match: 82, company: "Google Inc.", logo: "google" }
            ].map(({ match, company, logo }, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-shadow bg-white rounded-xl border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-full border-[3px] ${match >= 90 ? 'border-[#4ADE80]' : match >= 80 ? 'border-[#4ADE80]' : 'border-[#4ADE80]'} flex items-center justify-center`}>
                        <span className="font-bold text-gray-800 text-sm">{match}%</span>
                      </div>
                      <div className="absolute -top-1 -right-1 text-[10px] bg-gray-100 rounded-full px-1.5 py-0.5 text-gray-500">
                        Match
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">UX Designer</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <img src={`https://logo.clearbit.com/${logo}.com`} 
                             alt={company}
                             className="w-4 h-4 rounded"
                        />
                        <span>{company}</span>
                      </div>
                      <div className="flex items-center mt-1 text-gray-500 space-x-4 text-xs">
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          Ann Arbor, MI
                        </span>
                        <span className="flex items-center">
                          <Globe2 className="w-3 h-3 mr-1" />
                          Remote
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs font-normal bg-gray-50 text-gray-500">Full time</Badge>
                  <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs font-normal bg-gray-50 text-gray-500">Internship</Badge>
                  <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs font-normal bg-gray-50 text-gray-500">5+ years exp</Badge>
                  <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs font-normal bg-gray-50 text-gray-500">Mid, Senior Level</Badge>
                  <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs font-normal bg-gray-50 text-gray-500">$90K/yr - $130K/yr</Badge>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      2 hours ago
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      25 applicants
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="rounded-full px-4 h-8 text-sm font-medium">Apply</Button>
                    <Button className="rounded-full px-4 h-8 text-sm font-medium bg-[#4ADE80] hover:bg-[#22C55E] text-white">
                      Mock Interview
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* AI Mock Interview Section */}
          <div className="col-span-1">
            <Card className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 border-0 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                <h2 className="text-lg font-bold">Ace Your Interviews with AI-Powered Mock Sessions!</h2>
              </div>
              <p className="text-gray-700 mb-6 text-sm">
                Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
              </p>
              <h3 className="font-semibold text-base mb-3 flex items-center">
                <Sparkles className="w-4 h-4 text-purple-500 mr-1" />
                Why Choose Our AI Mock Interviews?
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong>Job-Specific Simulations:</strong>
                  <p className="ml-6">Practice with questions tailored to your target role, ensuring relevance and preparation.</p>
                </li>
                <li>
                  <strong>Actionable Feedback:</strong>
                  <p className="ml-6">Get detailed analysis of your responses and practical, step-by-step improvement suggestions.</p>
                </li>
                <li>
                  <strong>Boost Success Rates:</strong>
                  <p className="ml-6">Perfect your interview skills and increase your chances of landing the job you want.</p>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-gray-900 text-white hover:bg-gray-800 h-10 text-sm font-medium rounded-full flex items-center justify-center">
                <Clipboard className="w-4 h-4 mr-2" />
                Mock Interview
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}