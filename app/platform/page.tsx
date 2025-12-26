import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Database, Brain, LineChart, FileText } from "lucide-react";

export default function PlatformPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Kasparro Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive AI-SEO intelligence platform that bridges the gap between traditional search optimization and the AI-first future
            </p>
          </div>
        </section>

        {/* Audit Pipeline Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Audit Pipeline
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Database className="h-12 w-12 mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-lg">Input Assembler</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Collects brand data, domain info, and establishes audit parameters
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Brain className="h-12 w-12 mx-auto mb-2 text-purple-600" />
                  <CardTitle className="text-lg">Context Pack</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Aggregates contextual data from web crawl, social signals, and historical records
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <LineChart className="h-12 w-12 mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-lg">7 Audit Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Parallel execution of specialized analysis across all AI platforms
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <FileText className="h-12 w-12 mx-auto mb-2 text-orange-600" />
                  <CardTitle className="text-lg">Output Aggregator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Consolidates insights and generates actionable recommendations
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Input Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Data Does Kasparro Consume?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Brand Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">• Domain and website URLs</p>
                  <p className="text-sm text-gray-600">• Brand name and variations</p>
                  <p className="text-sm text-gray-600">• Product/service catalog</p>
                  <p className="text-sm text-gray-600">• Target keywords and topics</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Web Presence Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">• Published content and articles</p>
                  <p className="text-sm text-gray-600">• Social media profiles</p>
                  <p className="text-sm text-gray-600">• Press releases and mentions</p>
                  <p className="text-sm text-gray-600">• Backlink profiles</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Platform Signals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-gray-600">• LLM response patterns</p>
                  <p className="text-sm text-gray-600">• Citation frequency</p>
                  <p className="text-sm text-gray-600">• Context and sentiment</p>
                  <p className="text-sm text-gray-600">• Competitive positioning</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Output Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Outputs Do Brands Receive?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Dashboards</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Real-time AI visibility scores across all major platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Module-by-module breakdowns with detailed metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Trend analysis and historical performance tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Competitive benchmarking and positioning insights</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Actionable Recommendations</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Prioritized action items with estimated impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Content optimization strategies for AI platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Trust signal enhancement recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Keyword coverage expansion opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiation Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Kasparro Differs from Traditional SEO Tools
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI-First, Not Search-First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Traditional SEO tools optimize for search engine rankings. Kasparro optimizes for how AI models represent your brand in generated responses. We measure visibility where your customers are actually getting their answers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Context Over Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    While traditional tools focus on keyword density and rankings, Kasparro analyzes the context and sentiment of brand mentions across AI platforms. We help you understand not just if you're mentioned, but how you're positioned.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Proactive Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Instead of reacting to algorithm changes, Kasparro provides forward-looking insights into AI platform behavior. We help you shape how AI models understand and represent your brand before it becomes a problem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Platform
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how Kasparro can transform your AI presence with a comprehensive audit
            </p>
            <Link href="/app/dashboard">
              <Button size="lg">
                Try the Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
