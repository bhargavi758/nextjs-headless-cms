import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "primary" | "green" | "blue" | "amber";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary/10 text-primary",
  green: "bg-emerald-50 text-emerald-700",
  blue: "bg-sky-50 text-sky-700",
  amber: "bg-amber-50 text-amber-800",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

const categoryVariantMap: Record<string, BadgeVariant> = {
  lecture: "primary",
  seminar: "blue",
  workshop: "green",
  conference: "amber",
  colloquium: "primary",
  social: "default",
  research: "blue",
  faculty: "primary",
  students: "green",
  awards: "amber",
  announcements: "default",
};

export function CategoryBadge({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const variant = categoryVariantMap[category] ?? "default";
  return (
    <Badge variant={variant} className={className}>
      {category}
    </Badge>
  );
}
