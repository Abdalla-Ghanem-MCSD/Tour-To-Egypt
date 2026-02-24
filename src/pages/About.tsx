import Layout from "@/components/layout/Layout";
import { MapPin, Users, Award, Heart } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Travelers", value: "10,000+" },
  { icon: MapPin, label: "Destinations", value: "6" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Heart, label: "5-Star Reviews", value: "2,500+" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About <span className="text-gradient-gold">Tour To Egypt</span>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Tour To Egypt is a premium travel company specializing in personalized tours across Egypt.
              Founded by passionate Egyptologists and travel experts, we've been creating unforgettable
              experiences for over 15 years.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe every traveler deserves a unique journey. That's why we offer flexible tour
              packages — from budget-friendly car transfers to VIP all-inclusive experiences with
              senior Egyptologist guides, gourmet meals, and exclusive access.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Our team of licensed guides speaks multiple languages and brings Egypt's ancient
              history to life with passion and deep knowledge. Whether you're exploring the Pyramids
              of Giza, sailing on the Nile, or discovering hidden oases, we ensure every detail
              is taken care of.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-lg p-5 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">Our Promise</h2>
              <ul className="space-y-2">
                {[
                  "No hidden fees — transparent pricing on all tours",
                  "Free cancellation up to 24 hours before the tour",
                  "Licensed, insured, and government-approved guides",
                  "24/7 WhatsApp support during your trip",
                  "Personalized itineraries tailored to your interests",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
