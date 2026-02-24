import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              <span className="text-gradient-gold">Destinations</span>
            </h1>
            <p className="text-muted-foreground">Explore Egypt's most iconic locations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.slug}`}
                className="group relative aspect-[3/2] rounded-lg overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="font-serif font-bold text-xl text-foreground mb-1">{dest.name}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{dest.description}</p>
                  <p className="text-xs text-primary mt-2">{dest.tourCount} tours available →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
