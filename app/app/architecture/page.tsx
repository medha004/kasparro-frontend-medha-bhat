"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, Database, Brain, LineChart, FileText, Activity } from "lucide-react";
import architectureData from "@/data/system-architecture.json";
import { SystemComponent, AuditPipeline } from "@/types";

interface ArchitectureData {
  components: SystemComponent[];
  pipeline: AuditPipeline;
}

export default function ArchitecturePage() {
  const [data, setData] = useState<ArchitectureData | null>(null);

  useEffect(() => {
    setData(architectureData as ArchitectureData);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading architecture...</p>
      </div>
    );
  }

  const getComponentIcon = (type: string) => {
    switch (type) {
      case "input":
        return <Database className="h-6 w-6 text-blue-600" />;
      case "processor":
        return <Brain className="h-6 w-6 text-purple-600" />;
      case "module":
        return <LineChart className="h-6 w-6 text-green-600" />;
      case "output":
        return <FileText className="h-6 w-6 text-orange-600" />;
      default:
        return <Activity className="h-6 w-6 text-gray-600" />;
    }
  };

  const getComponentColor = (type: string) => {
    switch (type) {
      case "input":
        return "bg-blue-50 border-blue-200";
      case "processor":
        return "bg-purple-50 border-purple-200";
      case "module":
        return "bg-green-50 border-green-200";
      case "output":
        return "bg-orange-50 border-orange-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getComponentsByType = (type: string) => {
    return data.components.filter((c) => c.type === type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-black">System Architecture</h1>
          <p className="text-gray-600">
            Understanding how Kasparro processes brand data through the AI-SEO audit pipeline
          </p>
        </div>

        {/* Pipeline Stages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Audit Pipeline Flow</CardTitle>
            <CardDescription>
              The complete journey from data input to actionable insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.pipeline.stages.map((stage, index) => (
                <div key={stage.id}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {stage.order}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{stage.name}</h3>
                      <p className="text-gray-600 mb-3">{stage.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.components.map((compId) => {
                          const component = data.components.find((c) => c.id === compId);
                          return component ? (
                            <Badge key={compId} variant="outline" className="text-xs">
                              {component.name}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                  {index < data.pipeline.stages.length - 1 && (
                    <div className="ml-6 my-4">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Component Layers */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">System Components</h2>

          {/* Input Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              Input Layer
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {getComponentsByType("input").map((component) => (
                <Card
                  key={component.id}
                  className={cn("border-2", getComponentColor(component.type))}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getComponentIcon(component.type)}
                        <CardTitle className="text-base">{component.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {component.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-3">{component.description}</p>
                    {component.connections.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Connects to:</p>
                        <div className="flex flex-wrap gap-1">
                          {component.connections.map((conn) => {
                            const connComponent = data.components.find((c) => c.id === conn);
                            return connComponent ? (
                              <Badge key={conn} variant="secondary" className="text-xs">
                                {connComponent.name}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Processor Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Processing Layer
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {getComponentsByType("processor").map((component) => (
                <Card
                  key={component.id}
                  className={cn("border-2", getComponentColor(component.type))}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getComponentIcon(component.type)}
                        <CardTitle className="text-base">{component.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {component.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-3">{component.description}</p>
                    {component.connections.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Feeds into:</p>
                        <div className="flex flex-wrap gap-1">
                          {component.connections.slice(0, 3).map((conn) => {
                            const connComponent = data.components.find((c) => c.id === conn);
                            return connComponent ? (
                              <Badge key={conn} variant="secondary" className="text-xs">
                                {connComponent.name}
                              </Badge>
                            ) : null;
                          })}
                          {component.connections.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{component.connections.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Module Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <LineChart className="h-5 w-5 text-green-600" />
              Analysis Modules
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getComponentsByType("module").map((component) => (
                <Card
                  key={component.id}
                  className={cn("border-2", getComponentColor(component.type))}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getComponentIcon(component.type)}
                        <CardTitle className="text-sm">{component.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {component.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-700">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Output Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange-600" />
              Output Layer
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {getComponentsByType("output").map((component) => (
                <Card
                  key={component.id}
                  className={cn("border-2", getComponentColor(component.type))}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getComponentIcon(component.type)}
                        <CardTitle className="text-base">{component.name}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {component.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
