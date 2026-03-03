"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { EventCategory } from "@/lib/cms/types";
import { cn } from "@/lib/utils";

const categories: { value: EventCategory | "all"; label: string }[] = [
  { value: "all", label: "All Events" },
  { value: "lecture", label: "Lectures" },
  { value: "seminar", label: "Seminars" },
  { value: "workshop", label: "Workshops" },
  { value: "conference", label: "Conferences" },
  { value: "colloquium", label: "Colloquia" },
  { value: "social", label: "Social" },
];

export function EventFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`/events?${params.toString()}`, { scroll: false });
  };

  return (
    <fieldset>
      <legend className="sr-only">Filter events by category</legend>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label="Event category filter"
      >
        {categories.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={activeCategory === value}
            onClick={() => handleFilter(value)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              activeCategory === value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
