import { TourOption } from "@/types";
import { Check, X, Users } from "lucide-react";

interface OptionCardProps {
  option: TourOption;
  selected: boolean;
  onSelect: () => void;
}

const OptionCard = ({ option, selected, onSelect }: OptionCardProps) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left bg-card border rounded-lg p-5 transition-all ${
        selected
          ? "border-primary shadow-gold ring-1 ring-primary"
          : "border-border hover:border-primary/50"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-serif font-semibold text-foreground">{option.name}</h4>
          {option.notes && (
            <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded">
              {option.notes}
            </span>
          )}
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">${option.price}</p>
          <p className="text-xs text-muted-foreground">{option.currency} / person</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
        <span>{option.duration_hours} hours</span>
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" /> Max {option.max_group}
        </span>
        <span>{option.languages.join(", ")}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
        {option.includes.map((item) => (
          <div key={item} className="flex items-center gap-1.5 text-xs text-foreground/80">
            <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
            {item}
          </div>
        ))}
        {option.excludes.map((item) => (
          <div key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <X className="w-3 h-3 text-destructive flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </button>
  );
};

export default OptionCard;
