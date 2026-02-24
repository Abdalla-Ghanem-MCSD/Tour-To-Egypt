export interface TourOption {
  name: string;
  slug: string;
  price: number;
  currency: string;
  duration_hours: number;
  includes: string[];
  excludes: string[];
  languages: string[];
  max_group: number;
  notes?: string;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourFAQ {
  question: string;
  answer: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  destination: string;
  short_description: string;
  long_description: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  pickup_policy: string;
  images: string[];
  video_url?: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  options: TourOption[];
  faqs: TourFAQ[];
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  long_description: string;
  image: string;
  tourCount: number;
  meta_title: string;
  meta_description: string;
}

export interface BookingRequest {
  tour_id: string;
  option_slug: string;
  full_name: string;
  email: string;
  phone: string;
  nationality?: string;
  date: string;
  adults: number;
  children: number;
  pickup_location: string;
  hotel_name?: string;
  special_requests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  text: string;
  rating: number;
  tour: string;
  avatar?: string;
}
