import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import TourCard from "@/components/tours/TourCard";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";

const DestinationDetail = () => {
  const { slug } = useParams();
  const dest = destinations.find((d) => d.slug === slug);
  const destTours = tours.filter((t) => t.destination === slug);

  if (!dest) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-serif text-foreground">Destination not found</h1>
          <Link to="/destinations" className="text-primary mt-4 inline-block">← Back to Destinations</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px]">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground">{dest.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-xl">{dest.description}</p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">{dest.long_description}</p>

          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
            Tours in <span className="text-gradient-gold">{dest.name}</span>
          </h2>

          {destTours.length === 0 ? (
            <p className="text-muted-foreground">No tours available for this destination yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;
