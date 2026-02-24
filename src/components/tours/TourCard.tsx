import { Link } from "react-router-dom";
import { Tour } from "@/types";
import { MapPin, Clock, Tag } from "lucide-react";

const TourCard = ({ tour }: { tour: Tour }) => {
  const lowestPrice = Math.min(...tour.options.map((o) => o.price));

  return (
    <Link
      to={`/tours/${tour.slug}`}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-gold transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {tour.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {tour.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-primary/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <MapPin className="w-3 h-3 text-primary" />
          <span className="capitalize">{tour.destination}</span>
          <span className="mx-1">·</span>
          <Clock className="w-3 h-3 text-primary" />
          <span>{tour.options[0].duration_hours}h+</span>
        </div>
        <h3 className="font-serif font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{tour.short_description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From </span>
            <span className="text-primary font-bold">${lowestPrice}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Tag className="w-3 h-3" />
            {tour.options.length} options
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
