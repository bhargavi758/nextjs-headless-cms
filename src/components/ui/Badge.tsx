import { ReactNode } from "react";

type BadgeVariant = "default" | "primary" | "green" | "blue" | "amber";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  primary: "bg-primary/10 text-primary",
  green: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  amber: "bg-amber-50 text-amber-700",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${variantStyles[variant]} ${className}`}
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
  className = "",
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
