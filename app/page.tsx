import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, Brain, Target, TrendingUp, Shield, CheckCircle2 } from "lucide-react";

const modules = [
  {
    title: "AI Visibility",
    description: "Track your brand's presence across ChatGPT, Gemini, Perplexity, and other AI platforms",
    icon: Brain,
  },
  {
    title: "Brand Voice & Consistency",
    description: "Ensure your message appears consistently across all AI-generated responses",
    icon: Target,
  },
  {
    title: "E-E-A-T & Trust Signals",
    description: "Measure expertise, experience, authoritativeness, and trustworthiness in AI context",
    icon: Shield,
  },
  {
    title: "Keyword Coverage",
    description: "Analyze non-branded keyword visibility in AI-powered search results",
    icon: Search,
  },
  {
    title: "Content Depth",
    description: "Assess comprehensiveness and quality of content driving AI citations",
    icon: CheckCircle2,
  },
  {
    title: "Citations & References",
    description: "Track how authoritative sources cite your brand in AI training data",
    icon: TrendingUp,
  },
  {
    title: "Competitive Position",
    description: "Understand your position relative to competitors in AI responses",
    icon: Target,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              AI-Native SEO for the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI-First Search Era
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Kasparro helps brands measure, optimize, and dominate their presence in AI-generated responses across ChatGPT, Gemini, Perplexity, and other LLM platforms.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/app/dashboard">
                <Button size="lg">
                  Run AI-SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why AI-SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Why AI-SEO is Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Traditional SEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">• Optimizes for search engine rankings</p>
                  <p className="text-gray-600">• Focuses on keywords and backlinks</p>
                  <p className="text-gray-600">• Measures clicks and traffic</p>
                  <p className="text-gray-600">• Reactive to algorithm updates</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Native SEO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">• Optimizes for AI-generated responses</p>
                  <p className="text-gray-600">• Focuses on brand mentions and context</p>
                  <p className="text-gray-600">• Measures visibility in AI outputs</p>
                  <p className="text-gray-600">• Proactive brand intelligence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Modules Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              7 Core Audit Modules
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Comprehensive analysis across every dimension that matters in AI-powered search
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <module.icon className="h-8 w-8 mb-2 text-blue-600" />
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{module.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              How Kasparro Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Input Your Brand</h3>
                <p className="text-sm text-gray-600">
                  Provide your domain and brand information for analysis
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Context Assembly</h3>
                <p className="text-sm text-gray-600">
                  We gather contextual data from multiple sources
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-gray-600">
                  7 specialized modules analyze your AI presence
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Actionable Insights</h3>
                <p className="text-sm text-gray-600">
                  Receive detailed recommendations and next steps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Own Your AI Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a comprehensive AI-SEO audit and start optimizing for the future of search
            </p>
            <Link href="/app/dashboard">
              <Button size="lg">
                Start Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
