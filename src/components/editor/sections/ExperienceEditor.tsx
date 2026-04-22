"use client";

import { useResumeStore } from "@/lib/store";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AutoTextarea } from "@/components/ui/AutoTextarea";
import { SortableList, DragHandle } from "../SortableList";
import { Field } from "./HeaderEditor";
import { Plus, Trash2 } from "lucide-react";

export function ExperienceEditor() {
  const items = useResumeStore((s) => s.resume.experience);
  const addExperience = useResumeStore((s) => s.addExperience);
  const updateExperience = useResumeStore((s) => s.updateExperience);
  const removeExperience = useResumeStore((s) => s.removeExperience);
  const reorderExperience = useResumeStore((s) => s.reorderExperience);
  const addBullet = useResumeStore((s) => s.addBullet);
  const updateBullet = useResumeStore((s) => s.updateBullet);
  const removeBullet = useResumeStore((s) => s.removeBullet);
  const reorderBullets = useResumeStore((s) => s.reorderBullets);

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        count={items.length}
        onAdd={addExperience}
        addLabel="Add role"
      />

      {items.length === 0 ? (
        <EmptyState
          label="No roles yet."
          hint="Add a role to populate the Experience section."
        />
      ) : (
        <SortableList
          items={items}
          onReorder={reorderExperience}
          renderItem={(exp, { dragAttrs, dragListeners }) => (
            <article className="group flex flex-col overflow-hidden rounded-xl border border-ink-border bg-card shadow-raised-t">
              <div className="flex items-center gap-2 border-b border-ink-border bg-card-head px-2.5 py-2 shadow-[inset_0_1px_0_var(--shadow-highlight)]">
                <DragHandle dragAttrs={dragAttrs} dragListeners={dragListeners} />
                <Input
                  aria-label="Company"
                  className="h-8 flex-1 border-transparent bg-transparent text-[13.5px] font-semibold shadow-none hover:border-ink-border focus:shadow-none"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                  placeholder="Company"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Remove ${exp.company || "this role"}?`)) {
                      removeExperience(exp.id);
                    }
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-150 hover:bg-ink-surface hover:text-ink-danger"
                  aria-label={`Remove ${exp.company || "role"}`}
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden />
                </button>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <Field label="Role">
                  <Input
                    value={exp.role}
                    onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                    placeholder="Product Designer"
                  />
                </Field>

                <div className="grid grid-cols-2 gap-3">
                  <Field label="Start">
                    <Input
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                      placeholder="Mar 2024"
                    />
                  </Field>
                  <Field label="End">
                    <Input
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                      placeholder="Present"
                    />
                  </Field>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11.5px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                      Bullets
                    </span>
                    <Button variant="ghost" size="sm" onClick={() => addBullet(exp.id)}>
                      <Plus className="h-3.5 w-3.5" aria-hidden />
                      Bullet
                    </Button>
                  </div>
                  <SortableList
                    items={exp.bullets}
                    onReorder={(from, to) => reorderBullets(exp.id, from, to)}
                    renderItem={(b, { dragAttrs, dragListeners }) => (
                      <div className="group/bullet flex items-start gap-2 rounded-lg border border-ink-border bg-ink-bgDeep p-2 shadow-[inset_0_1px_0_var(--shadow-highlight)]">
                        <div className="pt-2">
                          <DragHandle dragAttrs={dragAttrs} dragListeners={dragListeners} />
                        </div>
                        <AutoTextarea
                          aria-label="Bullet"
                          minRows={2}
                          className="min-h-[52px] border-transparent bg-transparent shadow-none hover:border-ink-border focus:shadow-none"
                          value={b.text}
                          onChange={(e) => updateBullet(exp.id, b.id, e.target.value)}
                          placeholder="What you did, and what happened because of it."
                        />
                        <button
                          type="button"
                          onClick={() => removeBullet(exp.id, b.id)}
                          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-150 hover:bg-ink-bg hover:text-ink-danger"
                          aria-label="Remove bullet"
                        >
                          <Trash2 className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </div>
                    )}
                  />
                </div>
              </div>
            </article>
          )}
        />
      )}
    </div>
  );
}

export function SectionHeader({
  count,
  onAdd,
  addLabel,
}: {
  count: number;
  onAdd: () => void;
  addLabel: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline gap-2.5">
        <span className="text-[11.5px] font-medium uppercase tracking-[0.08em] text-ink-muted">
          {count === 1 ? "1 item" : `${count} items`}
        </span>
      </div>
      <Button variant="secondary" size="md" onClick={onAdd}>
        <Plus className="h-3.5 w-3.5" aria-hidden />
        {addLabel}
      </Button>
    </div>
  );
}

export function EmptyState({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="relative flex flex-col items-start gap-1.5 overflow-hidden rounded-xl border border-dashed border-ink-border bg-hatch px-5 py-7">
      <span className="relative text-[13.5px] text-ink-text">{label}</span>
      <span className="relative text-[12.5px] leading-[1.5] text-ink-muted">{hint}</span>
    </div>
  );
}
