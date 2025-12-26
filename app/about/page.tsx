import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Lightbulb, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Kasparro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Built by founders and engineers who saw the AI search revolution coming
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kasparro exists to help brands navigate the fundamental shift from traditional search to AI-powered discovery. We believe that as AI becomes the primary interface for information retrieval, brands need new tools, metrics, and strategies to maintain and grow their digital presence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Our mission is to democratize AI-SEO intelligence, making it accessible for brands of all sizes to understand, measure, and optimize their presence in AI-generated responses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Philosophy Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-2xl">Product Philosophy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Systems Over Tactics</h3>
                  <p className="text-gray-700">
                    We don't believe in quick hacks or gaming algorithms. Kasparro is built on the principle that sustainable AI visibility comes from building genuine authority, expertise, and trust signals that AI models naturally recognize and value.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Measurement Drives Improvement</h3>
                  <p className="text-gray-700">
                    You can't optimize what you can't measure. We provide clear, actionable metrics that help brands understand their AI presence and track improvement over time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Context is King</h3>
                  <p className="text-gray-700">
                    In the AI era, it's not just about being mentioned—it's about the context and sentiment of those mentions. We help brands understand the full picture of how they're represented in AI-generated content.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Forward-Looking Intelligence</h3>
                  <p className="text-gray-700">
                    Traditional SEO is reactive. AI-SEO needs to be proactive. We provide the intelligence brands need to shape their AI presence before issues arise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">Vision for AI-First Search</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We're witnessing a paradigm shift in how people discover information. Search engines are being replaced by AI assistants. Link clicks are being replaced by direct answers. Traditional SEO metrics are becoming less relevant by the day.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In this new world, brands face unprecedented challenges:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-700">• How do you measure visibility when there are no rankings?</li>
                  <li className="text-gray-700">• How do you optimize when you can't see the algorithm?</li>
                  <li className="text-gray-700">• How do you ensure accuracy when AI models might misrepresent your brand?</li>
                  <li className="text-gray-700">• How do you compete when traditional competitive analysis tools no longer apply?</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kasparro is built to answer these questions. We envision a future where every brand has complete visibility into their AI presence, with the tools and insights needed to optimize for this new paradigm.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Now?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                The AI search revolution isn't coming—it's already here. ChatGPT handles billions of queries. Perplexity is growing exponentially. Google is integrating AI directly into search results. Microsoft Copilot is becoming the default search experience for millions.
              </p>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                Brands that wait to optimize for AI search will find themselves invisible in the platforms where their customers are increasingly going for answers. The time to act is now.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start measuring and optimizing your AI presence today
            </p>
            <Link href="/app/dashboard">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
