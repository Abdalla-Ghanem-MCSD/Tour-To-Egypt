import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-muted-foreground mb-10">We'd love to hear from you. Reach out anytime!</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">WhatsApp / Phone</p>
                    <a href="https://wa.me/201234567890" className="text-sm text-muted-foreground hover:text-primary">
                      +20 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <a href="mailto:info@tourtoegypt.com" className="text-sm text-muted-foreground hover:text-primary">
                      info@tourtoegypt.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-2">
                {submitted ? (
                  <div className="bg-card border border-primary/30 rounded-lg p-8 text-center">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-muted-foreground">Name *</Label>
                        <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-input border-border" required />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Email *</Label>
                        <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-input border-border" required />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subject</Label>
                      <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="bg-input border-border" />
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Message *</Label>
                      <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-input border-border" required />
                    </div>
                    <Button type="submit" className="w-full bg-gold-gradient text-primary-foreground font-semibold hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
