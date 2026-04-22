"use client";

import { useResumeStore } from "@/lib/store";
import { Input } from "@/components/ui/Input";
import { SortableList, DragHandle } from "../SortableList";
import { Field } from "./HeaderEditor";
import { SectionHeader, EmptyState } from "./ExperienceEditor";
import { Trash2 } from "lucide-react";

export function EducationEditor() {
  const items = useResumeStore((s) => s.resume.education);
  const add = useResumeStore((s) => s.addEducation);
  const update = useResumeStore((s) => s.updateEducation);
  const remove = useResumeStore((s) => s.removeEducation);
  const reorder = useResumeStore((s) => s.reorderEducation);

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader count={items.length} onAdd={add} addLabel="Add entry" />
      {items.length === 0 ? (
        <EmptyState
          label="No education yet."
          hint="Degrees, certifications, meaningful coursework."
        />
      ) : (
        <SortableList
          items={items}
          onReorder={reorder}
          renderItem={(ed, { dragAttrs, dragListeners }) => (
            <article className="group flex flex-col overflow-hidden rounded-xl border border-ink-border bg-card shadow-raised-t">
              <div className="flex items-center gap-2 border-b border-ink-border bg-card-head px-2.5 py-2 shadow-[inset_0_1px_0_var(--shadow-highlight)]">
                <DragHandle dragAttrs={dragAttrs} dragListeners={dragListeners} />
                <Input
                  aria-label="Degree"
                  className="h-8 flex-1 border-transparent bg-transparent text-[13.5px] font-semibold shadow-none hover:border-ink-border focus:shadow-none"
                  value={ed.degree}
                  onChange={(e) => update(ed.id, { degree: e.target.value })}
                  placeholder="Degree"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Remove ${ed.degree || "entry"}?`)) remove(ed.id);
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-150 hover:bg-ink-surface hover:text-ink-danger"
                  aria-label={`Remove ${ed.degree || "entry"}`}
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                <Field label="Field">
                  <Input
                    value={ed.field}
                    onChange={(e) => update(ed.id, { field: e.target.value })}
                    placeholder="Information Technology"
                  />
                </Field>
                <Field label="Year">
                  <Input
                    value={ed.year}
                    onChange={(e) => update(ed.id, { year: e.target.value })}
                    placeholder="2020"
                  />
                </Field>
                <div className="col-span-2">
                  <Field label="Institution">
                    <Input
                      value={ed.institution}
                      onChange={(e) => update(ed.id, { institution: e.target.value })}
                      placeholder="University of Mumbai"
                    />
                  </Field>
                </div>
              </div>
            </article>
          )}
        />
      )}
    </div>
  );
}
