import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-gradient-gold mb-4">Tour To Egypt</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for unforgettable Egypt tours. We craft personalized experiences
              that bring ancient wonders to life.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Tours", path: "/tours" },
                { label: "Destinations", path: "/destinations" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              {["Cairo", "Giza", "Luxor", "Aswan", "Alexandria", "Fayoum"].map((dest) => (
                <li key={dest}>
                  <Link
                    to={`/destinations/${dest.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="https://wa.me/201234567890" className="hover:text-primary transition-colors">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@tourtoegypt.com" className="hover:text-primary transition-colors">
                  info@tourtoegypt.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tour To Egypt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
