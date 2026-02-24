import { Link } from "react-router-dom";
import { tours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";

const FeaturedTours = () => {
  const featured = tours.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Best Sellers</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Featured <span className="text-gradient-gold">Tours</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/tours"
            className="text-primary hover:text-gold-light font-medium text-sm tracking-wide transition-colors"
          >
            View All Tours →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
