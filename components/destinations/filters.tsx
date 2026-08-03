"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type Filters = {
  budget?: "budget" | "mid" | "luxury"
  season?: "spring" | "summer" | "autumn" | "winter"
  activity?: "adventure" | "culture" | "food" | "nightlife" | "nature"
}

export function DestinationFilters({
  value,
  onChange,
}: {
  value: Filters
  onChange: (v: Filters) => void
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Select value={value.budget} onValueChange={(v) => onChange({ ...value, budget: v as Filters["budget"] })}>
        <SelectTrigger>
          <SelectValue placeholder="Budget" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="budget">Budget</SelectItem>
          <SelectItem value="mid">Mid-range</SelectItem>
          <SelectItem value="luxury">Luxury</SelectItem>
        </SelectContent>
      </Select>

      <Select value={value.season} onValueChange={(v) => onChange({ ...value, season: v as Filters["season"] })}>
        <SelectTrigger>
          <SelectValue placeholder="Season" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="spring">Spring</SelectItem>
          <SelectItem value="summer">Summer</SelectItem>
          <SelectItem value="autumn">Autumn</SelectItem>
          <SelectItem value="winter">Winter</SelectItem>
        </SelectContent>
      </Select>

      <Select value={value.activity} onValueChange={(v) => onChange({ ...value, activity: v as Filters["activity"] })}>
        <SelectTrigger>
          <SelectValue placeholder="Activities" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="adventure">Adventure</SelectItem>
          <SelectItem value="culture">Culture</SelectItem>
          <SelectItem value="food">Food & Wine</SelectItem>
          <SelectItem value="nightlife">Nightlife</SelectItem>
          <SelectItem value="nature">Nature</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
