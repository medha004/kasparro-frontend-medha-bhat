"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, TrendingUp } from "lucide-react";
import auditModulesData from "@/data/audit-modules.json";
import { AuditModule, ModuleType } from "@/types";

export default function AuditPage() {
  const { selectedModule, setSelectedModule } = useAppStore();
  const [modules, setModules] = useState<AuditModule[]>([]);
  const [currentModule, setCurrentModule] = useState<AuditModule | null>(null);

  useEffect(() => {
    setModules(auditModulesData as AuditModule[]);
    if (!selectedModule && auditModulesData.length > 0) {
      setSelectedModule(auditModulesData[0].id as ModuleType);
    }
  }, [selectedModule, setSelectedModule]);

  useEffect(() => {
    if (selectedModule) {
      const module = modules.find((m) => m.id === selectedModule);
      if (module) setCurrentModule(module);
    }
  }, [selectedModule, modules]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "needs-improvement":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "medium":
        return <Info className="h-4 w-4 text-yellow-600" />;
      case "low":
        return <Info className="h-4 w-4 text-blue-600" />;
      default:
        return <Info className="h-4 w-4 text-gray-600" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-green-600 bg-green-50";
      case "medium":
        return "text-blue-600 bg-blue-50";
      case "low":
        return "text-gray-600 bg-gray-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar - Module List */}
        <div className="w-80 border-r border-gray-200 bg-white min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-black">Audit Modules</h2>
            <p className="text-sm text-gray-600 mt-1">Select a module to view details</p>
          </div>
          <div className="p-4 space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setSelectedModule(module.id as ModuleType)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border transition-all",
                  selectedModule === module.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm">{module.name}</h3>
                  <span className={cn(
                    "text-xl font-bold",
                    getScoreColor(module.score, module.maxScore)
                  )}>
                    {module.score}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className={cn("text-xs", getStatusColor(module.status))}
                >
                  {module.status.replace("-", " ")}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Main Panel - Module Details */}
        <div className="flex-1 p-8">
          {currentModule ? (
            <>
              {/* Module Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-black">{currentModule.name}</h1>
                    <p className="text-gray-600 max-w-3xl">{currentModule.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={cn(
                      "text-5xl font-bold",
                      getScoreColor(currentModule.score, currentModule.maxScore)
                    )}>
                      {currentModule.score}
                    </div>
                    <p className="text-gray-600 text-sm">out of {currentModule.maxScore}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={cn("text-sm px-3 py-1", getStatusColor(currentModule.status))}
                >
                  Status: {currentModule.status.replace("-", " ").toUpperCase()}
                </Badge>
              </div>

              {/* Insights Section */}
              {currentModule.insights.length > 0 && (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      Key Insights
                    </CardTitle>
                    <CardDescription>Important findings from the analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentModule.insights.map((insight) => (
                      <div
                        key={insight.id}
                        className={cn(
                          "p-4 rounded-lg border",
                          insight.type === "positive" ? "bg-green-50 border-green-200" :
                          insight.type === "negative" ? "bg-red-50 border-red-200" :
                          "bg-blue-50 border-blue-200"
                        )}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{insight.title}</h4>
                          <Badge variant="outline" className={getImpactColor(insight.impact)}>
                            {insight.impact} impact
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700">{insight.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Issues Section */}
              {currentModule.issues.length > 0 && (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Issues & Flags
                    </CardTitle>
                    <CardDescription>Areas requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {currentModule.issues.map((issue) => (
                      <div
                        key={issue.id}
                        className="p-4 rounded-lg border border-gray-200 bg-white"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          {getSeverityIcon(issue.severity)}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold">{issue.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {issue.severity}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{issue.description}</p>
                            <p className="text-xs text-gray-500">Category: {issue.category}</p>
                            {issue.affectedUrls && issue.affectedUrls.length > 0 && (
                              <div className="mt-2">
                                <p className="text-xs text-gray-500 mb-1">Affected URLs:</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  {issue.affectedUrls.map((url, idx) => (
                                    <li key={idx}>• {url}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Recommendations Section */}
              {currentModule.recommendations.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Recommendations
                    </CardTitle>
                    <CardDescription>Actionable steps to improve your score</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {currentModule.recommendations.map((rec) => (
                      <div
                        key={rec.id}
                        className="p-4 rounded-lg border border-gray-200 bg-white"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-lg">{rec.title}</h4>
                          <Badge
                            variant={rec.priority === "high" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {rec.priority} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{rec.description}</p>
                        <div className="bg-blue-50 p-3 rounded-md mb-3">
                          <p className="text-sm font-medium text-blue-900">
                            Estimated Impact: {rec.estimatedImpact}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-2">Action Items:</p>
                          <ul className="space-y-1">
                            {rec.actionItems.map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a module to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
