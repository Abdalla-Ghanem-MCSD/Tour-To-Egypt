import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          Discover the Land of Pharaohs
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Unforgettable
          <br />
          <span className="text-gradient-gold">Egypt Tours</span>
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Private guided tours to the Pyramids, Luxor, Aswan, and beyond.
          Expertly crafted experiences with flexible packages for every traveler.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/tours">
            <Button size="lg" className="bg-gold-gradient text-primary-foreground font-semibold px-8 hover:opacity-90">
              Explore Tours
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
