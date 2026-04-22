"use client";

import { useResumeStore } from "@/lib/store";
import { FontSelect } from "@/components/ui/FontSelect";
import { ColorPicker } from "@/components/ui/ColorPicker";
import { SliderField } from "@/components/ui/SliderField";
import { WeightPicker } from "@/components/ui/WeightPicker";
import { Field } from "./HeaderEditor";

export function StyleEditor() {
  const style = useResumeStore((s) => s.resume.style);
  const update = useResumeStore((s) => s.updateStyle);

  return (
    <section className="flex flex-col gap-5 border-t border-ink-border pt-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-[13px] font-semibold text-ink-text">Typography &amp; color</h3>
        <p className="text-[12px] leading-[1.5] text-ink-muted">
          Tune the visual identity of the resume. Changes are live.
        </p>
      </div>

      <Field label="Title font">
        <FontSelect
          value={style.titleFontId}
          onChange={(id) => update({ titleFontId: id })}
          aria-label="Title font"
        />
      </Field>

      <Field label="Body font">
        <FontSelect
          value={style.bodyFontId}
          onChange={(id) => update({ bodyFontId: id })}
          aria-label="Body font"
        />
      </Field>

      <Field label="Header color" hint="Applies to your name.">
        <ColorPicker
          value={style.accentColor}
          onChange={(hex) => update({ accentColor: hex })}
          aria-label="Header accent color"
        />
      </Field>

      <Field label="Name weight" hint="Anchors the visual hierarchy.">
        <WeightPicker
          value={style.nameFontWeight}
          onChange={(w) => update({ nameFontWeight: w })}
          aria-label="Name font weight"
        />
      </Field>

      <Field label="Name tracking" hint="Negative tightens, positive opens.">
        <SliderField
          value={style.nameLetterSpacing}
          onChange={(v) => update({ nameLetterSpacing: v })}
          min={-0.06}
          max={0.06}
          step={0.002}
          precision={3}
          suffix="em"
          aria-label="Name letter spacing"
        />
      </Field>

      <Field label="Body line height" hint="Affects bullets and paragraphs.">
        <SliderField
          value={style.bodyLineHeight}
          onChange={(v) => update({ bodyLineHeight: v })}
          min={1.2}
          max={1.9}
          step={0.05}
          precision={2}
          aria-label="Body line height"
        />
      </Field>
    </section>
  );
}
