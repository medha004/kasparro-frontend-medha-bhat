"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Target, Calendar } from "lucide-react";
import dashboardData from "@/data/dashboard-snapshot.json";
import { DashboardSnapshot } from "@/types";

export default function DashboardPage() {
  const { selectedBrand, brands, setSelectedBrand } = useAppStore();
  const [snapshot, setSnapshot] = useState<DashboardSnapshot | null>(null);

  useEffect(() => {
    setSnapshot(dashboardData as DashboardSnapshot);
  }, []);

  if (!snapshot || !selectedBrand) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "success";
      case "good":
        return "secondary";
      case "needs-improvement":
        return "warning";
      case "critical":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            <select
              value={selectedBrand?.id}
              onChange={(e) => {
                const brand = brands.find((b) => b.id === e.target.value);
                if (brand) setSelectedBrand(brand);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <p className="text-gray-600">
            AI-SEO performance overview for {selectedBrand.name}
          </p>
        </div>

        {/* Overall Health Badge */}
        <div className="mb-6">
          <Badge variant={getStatusColor(snapshot.overallHealth) as any} className="text-sm px-3 py-1">
            Overall Health: {snapshot.overallHealth.replace("-", " ").toUpperCase()}
          </Badge>
        </div>

        {/* Snapshot Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">AI Visibility Score</CardTitle>
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${getScoreColor(snapshot.aiVisibilityScore)}`}>
                {snapshot.aiVisibilityScore}
              </div>
              <p className="text-sm text-gray-600 mt-2">out of 100</p>
              <CardDescription className="mt-3">
                Your brand's presence across major AI platforms
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Trust / E-E-A-T Score</CardTitle>
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${getScoreColor(snapshot.trustScore)}`}>
                {snapshot.trustScore}
              </div>
              <p className="text-sm text-gray-600 mt-2">out of 100</p>
              <CardDescription className="mt-3">
                Expertise, experience, authoritativeness & trust signals
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Keyword Coverage</CardTitle>
                <Target className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${getScoreColor(snapshot.keywordCoverage)}`}>
                {snapshot.keywordCoverage}%
              </div>
              <p className="text-sm text-gray-600 mt-2">of target keywords</p>
              <CardDescription className="mt-3">
                Non-branded keyword visibility in AI responses
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Last Audit */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-600" />
              <CardTitle className="text-lg">Last Audit</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              {new Date(snapshot.lastAuditDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <CardDescription className="mt-2">
              Next audit scheduled for{" "}
              {new Date(
                new Date(snapshot.lastAuditDate).getTime() + 7 * 24 * 60 * 60 * 1000
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </CardContent>
        </Card>

        {/* Performance Trends */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends (Last 30 Days)</CardTitle>
              <CardDescription>Track your AI-SEO metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {snapshot.trendsData.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="text-sm text-gray-600">
                      {new Date(trend.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Visibility: </span>
                        <span className={`font-semibold ${getScoreColor(trend.aiVisibilityScore)}`}>
                          {trend.aiVisibilityScore}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Trust: </span>
                        <span className={`font-semibold ${getScoreColor(trend.trustScore)}`}>
                          {trend.trustScore}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Coverage: </span>
                        <span className={`font-semibold ${getScoreColor(trend.keywordCoverage)}`}>
                          {trend.keywordCoverage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
