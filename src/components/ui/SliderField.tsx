"use client";

import * as React from "react";
import { Slider } from "./Slider";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  precision?: number; // decimals in the input
  suffix?: string; // displayed inside input (e.g., "em")
  "aria-label": string;
};

export function SliderField({
  value,
  onChange,
  min,
  max,
  step,
  precision = 2,
  suffix,
  ...rest
}: Props) {
  const [draft, setDraft] = React.useState(value.toFixed(precision));
  React.useEffect(() => {
    setDraft(value.toFixed(precision));
  }, [value, precision]);

  const clamp = (n: number) => Math.min(max, Math.max(min, n));

  const commit = () => {
    const parsed = parseFloat(draft);
    if (Number.isFinite(parsed)) {
      onChange(clamp(parsed));
    } else {
      setDraft(value.toFixed(precision));
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 pl-[2px] pr-[2px]">
        <Slider
          aria-label={rest["aria-label"]}
          value={[value]}
          onValueChange={(v) => onChange(v[0])}
          min={min}
          max={max}
          step={step}
        />
      </div>
      <div
        className={cn(
          "relative flex h-8 w-[74px] shrink-0 items-center rounded-md border border-[var(--input-border)] bg-input px-2 shadow-well-t",
          "focus-within:border-[var(--input-focus-border)] focus-within:shadow-[inset_0_1.5px_2px_var(--input-shadow-top),0_0_0_2.5px_var(--input-focus-ring)]",
          "transition-[border-color,box-shadow] duration-150",
        )}
      >
        <input
          type="text"
          inputMode="decimal"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
              (e.target as HTMLInputElement).blur();
            }
          }}
          className="h-full w-full bg-transparent text-right text-[12.5px] tabular-nums text-ink-text placeholder:text-ink-subtle focus:outline-none"
        />
        {suffix && (
          <span className="pl-1 text-[11px] text-ink-subtle">{suffix}</span>
        )}
      </div>
    </div>
  );
}
