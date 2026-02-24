import { useState } from "react";
import { Tour, TourOption } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  tour: Tour;
  selectedOption: TourOption | null;
}

const BookingForm = ({ tour, selectedOption }: BookingFormProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    nationality: "",
    date: "",
    adults: "2",
    children: "0",
    pickup_location: "",
    hotel_name: "",
    special_requests: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) {
      toast({ title: "Please select a tour option", variant: "destructive" });
      return;
    }
    if (!form.full_name || !form.email || !form.phone || !form.date) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    // In production, this would call an API endpoint
    console.log("Booking submitted:", { tour: tour.slug, option: selectedOption.slug, ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card border border-primary/30 rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">Booking Request Received!</h3>
        <p className="text-muted-foreground text-sm">
          We received your request and will confirm by email or WhatsApp within 2 hours.
          Thank you for choosing Tour To Egypt!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
      <h3 className="font-serif text-lg font-bold text-foreground mb-2">Book This Tour</h3>

      {selectedOption && (
        <div className="bg-secondary/50 border border-border rounded p-3 mb-4">
          <p className="text-sm text-foreground font-medium">{selectedOption.name}</p>
          <p className="text-primary font-bold">${selectedOption.price} <span className="text-xs text-muted-foreground font-normal">/ person</span></p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="full_name" className="text-xs text-muted-foreground">Full Name *</Label>
          <Input id="full_name" value={form.full_name} onChange={(e) => handleChange("full_name", e.target.value)} className="bg-input border-border" required />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs text-muted-foreground">Email *</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="bg-input border-border" required />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs text-muted-foreground">Phone / WhatsApp *</Label>
          <Input id="phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="bg-input border-border" required />
        </div>
        <div>
          <Label htmlFor="nationality" className="text-xs text-muted-foreground">Nationality</Label>
          <Input id="nationality" value={form.nationality} onChange={(e) => handleChange("nationality", e.target.value)} className="bg-input border-border" />
        </div>
        <div>
          <Label htmlFor="date" className="text-xs text-muted-foreground">Preferred Date *</Label>
          <Input id="date" type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)} className="bg-input border-border" required />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="adults" className="text-xs text-muted-foreground">Adults</Label>
            <Select value={form.adults} onValueChange={(v) => handleChange("adults", v)}>
              <SelectTrigger className="bg-input border-border"><SelectValue /></SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="children" className="text-xs text-muted-foreground">Children</Label>
            <Select value={form.children} onValueChange={(v) => handleChange("children", v)}>
              <SelectTrigger className="bg-input border-border"><SelectValue /></SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="pickup" className="text-xs text-muted-foreground">Pickup Location *</Label>
          <Input id="pickup" placeholder="e.g. Cairo Airport" value={form.pickup_location} onChange={(e) => handleChange("pickup_location", e.target.value)} className="bg-input border-border" required />
        </div>
        <div>
          <Label htmlFor="hotel" className="text-xs text-muted-foreground">Hotel Name</Label>
          <Input id="hotel" value={form.hotel_name} onChange={(e) => handleChange("hotel_name", e.target.value)} className="bg-input border-border" />
        </div>
      </div>

      <div>
        <Label htmlFor="special" className="text-xs text-muted-foreground">Special Requests</Label>
        <Textarea id="special" rows={3} value={form.special_requests} onChange={(e) => handleChange("special_requests", e.target.value)} className="bg-input border-border" />
      </div>

      <Button type="submit" className="w-full bg-gold-gradient text-primary-foreground font-semibold hover:opacity-90" size="lg">
        Submit Booking Request
      </Button>
      <p className="text-[11px] text-muted-foreground text-center">
        No payment required now. We'll confirm availability within 2 hours.
      </p>
    </form>
  );
};

export default BookingForm;
