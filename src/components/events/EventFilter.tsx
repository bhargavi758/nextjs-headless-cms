"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { EventCategory } from "@/lib/cms/types";

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
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              activeCategory === value
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
