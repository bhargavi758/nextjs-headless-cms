import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
  href?: string;
}

export function Card({
  children,
  className,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-card rounded-md border border-border overflow-hidden",
        "transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function CardImage({
  src,
  alt,
  aspectRatio = "video",
}: {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "wide";
}) {
  const ratioClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  return (
    <div className={cn(ratioClass, "relative overflow-hidden bg-muted")}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
        role="img"
        aria-label={alt}
      />
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
