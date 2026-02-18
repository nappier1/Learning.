import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "primary" | "accent" | "default";
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon,
  variant = "default" 
}: StatsCardProps) {
  return (
    <div className={cn(
      "rounded-2xl bg-card p-6 shadow-md border border-border/50 transition-all duration-300",
      "hover:shadow-lg hover:scale-[1.02]",
      variant === "primary" && "gradient-primary shadow-glow",
      variant === "accent" && "gradient-accent shadow-accent-glow"
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-foreground">
            {value}
          </p>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300",
          variant === "primary" && "bg-primary/10 text-primary",
          variant === "accent" && "bg-accent/10 text-accent",
          variant === "default" && "bg-muted text-muted-foreground"
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
