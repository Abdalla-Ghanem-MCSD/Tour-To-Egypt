import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";

const DestinationsPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Where To Go</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Popular <span className="text-gradient-gold">Destinations</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={`/destinations/${dest.slug}`}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif font-bold text-lg text-foreground">{dest.name}</h3>
                <p className="text-sm text-muted-foreground">{dest.tourCount} tours</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPreview;
