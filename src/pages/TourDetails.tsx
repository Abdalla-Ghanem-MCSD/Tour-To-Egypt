import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import OptionCard from "@/components/tour-details/OptionCard";
import BookingForm from "@/components/tour-details/BookingForm";
import { tours } from "@/data/tours";
import { TourOption } from "@/types";
import { MapPin, Clock, ChevronRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TourDetails = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);
  const [selectedOption, setSelectedOption] = useState<TourOption | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!tour) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-serif text-foreground">Tour not found</h1>
          <Link to="/tours" className="text-primary mt-4 inline-block">← Back to Tours</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/tours" className="hover:text-primary">Tours</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{tour.title}</span>
        </div>
      </div>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <div>
                <div className="aspect-video rounded-lg overflow-hidden mb-3">
                  <img
                    src={tour.images[activeImage]}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {tour.images.length > 1 && (
                  <div className="flex gap-2">
                    {tour.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                          i === activeImage ? "border-primary" : "border-transparent opacity-60"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Meta */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tour.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">{tour.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> <span className="capitalize">{tour.destination}</span></span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> {tour.options[0].duration_hours}+ hours</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{tour.long_description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tour.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">Itinerary</h2>
                <div className="space-y-3">
                  {tour.itinerary.map((step) => (
                    <div key={step.day} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                        {step.day}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup Policy */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-serif font-bold text-foreground mb-2">Pickup Information</h3>
                <p className="text-sm text-muted-foreground">{tour.pickup_policy}</p>
              </div>

              {/* FAQs */}
              {tour.faqs.length > 0 && (
                <div>
                  <h2 className="font-serif text-xl font-bold text-foreground mb-4">FAQs</h2>
                  <Accordion type="single" collapsible>
                    {tour.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                        <AccordionTrigger className="text-sm text-foreground hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>

            {/* Right Column - Options & Booking */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-foreground">Choose Your Package</h2>
              {tour.options.map((option) => (
                <OptionCard
                  key={option.slug}
                  option={option}
                  selected={selectedOption?.slug === option.slug}
                  onSelect={() => setSelectedOption(option)}
                />
              ))}

              <div className="mt-6">
                <BookingForm tour={tour} selectedOption={selectedOption} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourDetails;
