"use client";

import { AnimatePresence, motion } from "motion/react";
import { useResumeStore } from "@/lib/store";
import type { SectionKind } from "@/lib/types";
import { HeaderEditor } from "./sections/HeaderEditor";
import { ExperienceEditor } from "./sections/ExperienceEditor";
import { SkillsEditor } from "./sections/SkillsEditor";
import { EducationEditor } from "./sections/EducationEditor";
import { LinksEditor } from "./sections/LinksEditor";
import { SectionArranger } from "./SectionArranger";
import { cn } from "@/lib/utils";
import { spring, tabSwap } from "@/lib/motion";

const tabs: { id: "header" | SectionKind; label: string }[] = [
  { id: "header", label: "Header" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "links", label: "Online" },
];

export function EditorPanel() {
  const selection = useResumeStore((s) => s.selection);
  const select = useResumeStore((s) => s.select);

  const activeTab: "header" | SectionKind =
    selection.kind === "header"
      ? "header"
      : selection.kind === "section"
        ? selection.id
        : selection.kind === "experience"
          ? "experience"
          : selection.kind === "skillGroup"
            ? "skills"
            : selection.kind === "education"
              ? "education"
              : "links";

  return (
    <div className="relative flex min-w-0 flex-col overflow-hidden border-l border-ink-border bg-panel shadow-panel-t">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[var(--shadow-highlight)] to-transparent"
      />
      <nav
        role="tablist"
        aria-label="Resume sections"
        className="relative flex shrink-0 items-stretch border-b border-ink-border bg-tabs px-1 shadow-[inset_0_1px_0_var(--shadow-highlight),0_1px_0_var(--shadow-edge-dark)]"
      >
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls="editor-panel-content"
              onClick={() =>
                select(
                  t.id === "header"
                    ? { kind: "header" }
                    : { kind: "section", id: t.id as SectionKind },
                )
              }
              className={cn(
                "relative flex-1 px-3 py-3.5 text-[12.5px] font-medium transition-colors duration-150",
                "hover:text-ink-text",
                isActive ? "text-ink-text" : "text-ink-muted",
              )}
            >
              <span className="relative z-10">{t.label}</span>
              {isActive && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-x-2.5 -bottom-px h-[2px] rounded-full bg-ink-text shadow-[0_0_10px_oklch(0.94_0.004_250_/_0.4)]"
                  transition={spring.soft}
                  aria-hidden
                />
              )}
            </button>
          );
        })}
      </nav>

      <div
        id="editor-panel-content"
        role="tabpanel"
        className="relative flex-1 overflow-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            variants={tabSwap}
            initial="hidden"
            animate="show"
            exit="exit"
            className="px-5 py-6"
          >
            {activeTab === "header" && <HeaderEditor />}
            {activeTab === "experience" && <ExperienceEditor />}
            {activeTab === "skills" && <SkillsEditor />}
            {activeTab === "education" && <EducationEditor />}
            {activeTab === "links" && <LinksEditor />}
          </motion.div>
        </AnimatePresence>
      </div>

      <SectionArranger />
    </div>
  );
}
