"use client";

import { useResumeStore } from "@/lib/store";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SortableList, DragHandle } from "../SortableList";
import { Plus, Trash2 } from "lucide-react";
import { StyleEditor } from "./StyleEditor";

export function HeaderEditor() {
  const header = useResumeStore((s) => s.resume.header);
  const updateHeader = useResumeStore((s) => s.updateHeader);
  const addContact = useResumeStore((s) => s.addContact);
  const updateContact = useResumeStore((s) => s.updateContact);
  const removeContact = useResumeStore((s) => s.removeContact);
  const reorderContacts = useResumeStore((s) => s.reorderContacts);

  return (
    <div className="flex flex-col gap-7">
      <Field label="Name">
        <Input
          value={header.name}
          onChange={(e) => updateHeader({ name: e.target.value })}
          placeholder="Your name"
        />
      </Field>

      <Field label="Title">
        <Input
          value={header.title}
          onChange={(e) => updateHeader({ title: e.target.value })}
          placeholder="Product Designer"
        />
      </Field>

      <Field label="Tagline" hint="Keep it one to two sentences.">
        <Textarea
          rows={3}
          value={header.tagline}
          onChange={(e) => updateHeader({ tagline: e.target.value })}
          placeholder="What you do, in your own words."
        />
      </Field>

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Label>Contacts</Label>
          <Button variant="ghost" size="sm" onClick={addContact} aria-label="Add contact">
            <Plus className="h-3.5 w-3.5" aria-hidden />
            Add
          </Button>
        </div>
        <SortableList
          items={header.contacts}
          onReorder={reorderContacts}
          renderItem={(c, { dragAttrs, dragListeners }) => (
            <div className="group flex items-center gap-2 rounded-lg border border-ink-border bg-card p-2 shadow-raised-t">
              <DragHandle dragAttrs={dragAttrs} dragListeners={dragListeners} />
              <Input
                aria-label="Contact label"
                className="h-8 w-24 shrink-0 border-transparent bg-transparent text-[12px] text-ink-muted shadow-none hover:border-ink-border focus:shadow-none"
                value={c.label}
                onChange={(e) => updateContact(c.id, { label: e.target.value })}
                placeholder="label"
              />
              <Input
                aria-label="Contact value"
                className="h-8 flex-1 border-transparent bg-transparent shadow-none hover:border-ink-border focus:shadow-none"
                value={c.value}
                onChange={(e) => updateContact(c.id, { value: e.target.value })}
                placeholder="value"
              />
              <Input
                aria-label="Link (optional)"
                className="h-8 w-40 shrink-0 border-transparent bg-transparent text-[12px] text-ink-muted shadow-none hover:border-ink-border focus:shadow-none"
                value={c.href ?? ""}
                onChange={(e) =>
                  updateContact(c.id, { href: e.target.value || undefined })
                }
                placeholder="https:// (optional)"
              />
              <button
                type="button"
                onClick={() => removeContact(c.id)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-150 hover:bg-ink-surface hover:text-ink-danger"
                aria-label={`Remove ${c.label || "contact"}`}
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          )}
        />
      </section>

      <StyleEditor />
    </div>
  );
}

export function Field({
  label,
  hint,
  children,
  labelFor,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  labelFor?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={labelFor}>{label}</Label>
        {hint ? (
          <span className="text-[11.5px] leading-[1.4] text-ink-subtle">{hint}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}
