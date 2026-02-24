import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import TourCard from "@/components/tours/TourCard";
import TourFilters from "@/components/tours/TourFilters";
import { tours } from "@/data/tours";

const Tours = () => {
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("all");
  const [tag, setTag] = useState("all");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let result = [...tours];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) => t.title.toLowerCase().includes(q) || t.short_description.toLowerCase().includes(q)
      );
    }

    if (destination !== "all") {
      result = result.filter((t) => t.destination === destination);
    }

    if (tag !== "all") {
      result = result.filter((t) => t.tags.includes(tag));
    }

    if (sort === "price-low") {
      result.sort((a, b) => Math.min(...a.options.map((o) => o.price)) - Math.min(...b.options.map((o) => o.price)));
    } else if (sort === "price-high") {
      result.sort((a, b) => Math.min(...b.options.map((o) => o.price)) - Math.min(...a.options.map((o) => o.price)));
    }

    return result;
  }, [search, destination, tag, sort]);

  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              All <span className="text-gradient-gold">Tours</span>
            </h1>
            <p className="text-muted-foreground">Discover our hand-crafted Egypt experiences</p>
          </div>

          <TourFilters
            onSearch={setSearch}
            onDestination={setDestination}
            onTag={setTag}
            onSort={setSort}
          />

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No tours match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
