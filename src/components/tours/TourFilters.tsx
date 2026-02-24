import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { destinations } from "@/data/destinations";

interface TourFiltersProps {
  onSearch: (q: string) => void;
  onDestination: (d: string) => void;
  onTag: (t: string) => void;
  onSort: (s: string) => void;
}

const TourFilters = ({ onSearch, onDestination, onTag, onSort }: TourFiltersProps) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search tours..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
          className="pl-10 bg-card border-border"
        />
      </div>
      <Select onValueChange={onDestination}>
        <SelectTrigger className="w-full sm:w-44 bg-card border-border">
          <SelectValue placeholder="Destination" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Destinations</SelectItem>
          {destinations.map((d) => (
            <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={onTag}>
        <SelectTrigger className="w-full sm:w-36 bg-card border-border">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="private">Private</SelectItem>
          <SelectItem value="vip">VIP</SelectItem>
          <SelectItem value="family">Family</SelectItem>
          <SelectItem value="budget">Budget</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={onSort}>
        <SelectTrigger className="w-full sm:w-40 bg-card border-border">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TourFilters;
