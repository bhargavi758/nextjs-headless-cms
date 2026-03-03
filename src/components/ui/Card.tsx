import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "section";
  href?: string;
}

export function Card({
  children,
  className = "",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-shadow hover:shadow-md ${className}`}
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
    <div className={`${ratioClass} relative overflow-hidden bg-gray-100`}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-sand/30"
        role="img"
        aria-label={alt}
      />
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
