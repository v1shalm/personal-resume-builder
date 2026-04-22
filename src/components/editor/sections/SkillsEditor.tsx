"use client";

import { useResumeStore } from "@/lib/store";
import { Input } from "@/components/ui/Input";
import { AutoTextarea } from "@/components/ui/AutoTextarea";
import { SortableList, DragHandle } from "../SortableList";
import { SectionHeader, EmptyState } from "./ExperienceEditor";
import { Trash2 } from "lucide-react";

export function SkillsEditor() {
  const groups = useResumeStore((s) => s.resume.skillGroups);
  const add = useResumeStore((s) => s.addSkillGroup);
  const update = useResumeStore((s) => s.updateSkillGroup);
  const remove = useResumeStore((s) => s.removeSkillGroup);
  const reorder = useResumeStore((s) => s.reorderSkillGroups);

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader count={groups.length} onAdd={add} addLabel="Add group" />
      {groups.length === 0 ? (
        <EmptyState
          label="No skill groups yet."
          hint="Group skills by category — e.g., Design, Tools, Code."
        />
      ) : (
        <SortableList
          items={groups}
          onReorder={reorder}
          renderItem={(g, { dragAttrs, dragListeners }) => (
            <article className="group flex flex-col overflow-hidden rounded-xl border border-ink-border bg-card shadow-raised-t">
              <div className="flex items-center gap-2 border-b border-ink-border bg-card-head px-2.5 py-2 shadow-[inset_0_1px_0_var(--shadow-highlight)]">
                <DragHandle dragAttrs={dragAttrs} dragListeners={dragListeners} />
                <Input
                  aria-label="Group name"
                  className="h-8 flex-1 border-transparent bg-transparent text-[13.5px] font-semibold shadow-none hover:border-ink-border focus:shadow-none"
                  value={g.label}
                  onChange={(e) => update(g.id, { label: e.target.value })}
                  placeholder="Group name"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Remove ${g.label || "group"}?`)) remove(g.id);
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-150 hover:bg-ink-surface hover:text-ink-danger"
                  aria-label={`Remove ${g.label || "group"}`}
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden />
                </button>
              </div>
              <div className="p-4">
                <AutoTextarea
                  aria-label="Skills list"
                  minRows={2}
                  value={g.items}
                  onChange={(e) => update(g.id, { items: e.target.value })}
                  placeholder="Comma-separated: Visual Design, User Research, Usability Testing"
                />
              </div>
            </article>
          )}
        />
      )}
    </div>
  );
}
