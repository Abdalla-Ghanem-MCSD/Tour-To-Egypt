import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTours from "@/components/home/FeaturedTours";
import DestinationsPreview from "@/components/home/DestinationsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTours />
      <DestinationsPreview />
      <TestimonialsSection />

      {/* WhatsApp CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Ready to Explore <span className="text-gradient-gold">Egypt</span>?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Chat with us on WhatsApp for instant responses, custom itineraries, and the best prices.
          </p>
          <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold-gradient text-primary-foreground font-semibold px-8 hover:opacity-90">
              <Phone className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
