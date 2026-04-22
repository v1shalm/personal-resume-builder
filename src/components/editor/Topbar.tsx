"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useResumeStore } from "@/lib/store";
import { useTheme } from "@/lib/theme";
import { ExportDialog } from "./ExportDialog";
import { Download, RotateCcw, FileJson, FileUp, Sun, Moon } from "lucide-react";
import { spring, stagger, rowFadeUp } from "@/lib/motion";

export function Topbar() {
  const name = useResumeStore((s) => s.resume.header.name);
  const reset = useResumeStore((s) => s.reset);
  const resume = useResumeStore((s) => s.resume);
  const importResume = useResumeStore((s) => s.importResume);
  const theme = useTheme((s) => s.theme);
  const toggleTheme = useTheme((s) => s.toggle);

  const [exportOpen, setExportOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "e") {
        e.preventDefault();
        setExportOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resume.header.name.replace(/\s+/g, "_")}_resume.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const uploadJSON = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result));
          importResume(data);
        } catch {
          alert("Couldn't read that file. Make sure it's a JSON saved from this builder.");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleReset = () => {
    if (
      confirm(
        "Reset to the starter resume?\n\nYour current edits will be replaced and can't be recovered. Save a JSON backup first if you want to keep them.",
      )
    ) {
      reset();
    }
  };

  return (
    <>
      <motion.header
        variants={stagger(0.045, 0.06)}
        initial="hidden"
        animate="show"
        className="relative z-30 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-ink-border bg-topbar px-3 shadow-topbar-t sm:px-4 md:px-5"
      >
        <motion.div variants={rowFadeUp} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <motion.div
            variants={rowFadeUp}
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={spring.snap}
            className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] border border-ink-border bg-gradient-to-b from-ink-raised to-ink-surface shadow-raised-t"
            aria-hidden
          >
            <span className="text-[12px] font-semibold text-ink-text">R</span>
          </motion.div>
          <div className="flex min-w-0 items-baseline gap-2.5">
            <h1 className="truncate text-[14px] font-semibold tracking-tight text-ink-text">
              <span className="hidden sm:inline">Resume Builder</span>
              <span className="sm:hidden">Resume</span>
            </h1>
            <span className="hidden truncate text-[12px] text-ink-subtle md:inline">
              {name || "—"}
            </span>
          </div>
        </motion.div>
        <motion.div variants={rowFadeUp} className="flex shrink-0 items-center gap-1 sm:gap-1.5">
          {/* Import — icon-only on narrow, icon+label from md */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={uploadJSON}
            aria-label="Import JSON"
          >
            <FileUp className="h-3.5 w-3.5" aria-hidden />
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="hidden md:inline-flex"
            onClick={uploadJSON}
          >
            <FileUp className="h-3.5 w-3.5" aria-hidden />
            <span>Import</span>
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="hidden lg:inline-flex"
            onClick={downloadJSON}
          >
            <FileJson className="h-3.5 w-3.5" aria-hidden />
            <span>Save JSON</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            aria-label="Reset to seeded resume"
            className="hidden sm:inline-flex"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
                  transition={spring.snap}
                  className="flex"
                >
                  <Sun className="h-3.5 w-3.5" aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 60, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -60, scale: 0.7 }}
                  transition={spring.snap}
                  className="flex"
                >
                  <Moon className="h-3.5 w-3.5" aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
          <div className="mx-1 hidden h-5 w-px bg-ink-border sm:mx-1.5 sm:block" aria-hidden />
          <Button
            variant="primary"
            size="lg"
            onClick={() => setExportOpen(true)}
            aria-label="Export PDF"
            className="px-3 sm:px-4"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Export PDF</span>
            <span className="sm:hidden">Export</span>
            <kbd
              aria-label="keyboard shortcut Command E"
              className="ml-1 hidden h-[22px] items-center justify-center gap-[3px] rounded-[6px] border border-[var(--kbd-border)] bg-[var(--kbd-bg)] px-[7px] text-[11px] font-semibold leading-none text-[var(--kbd-text)] md:inline-flex"
            >
              <span className="text-[11.5px] leading-none">⌘</span>
              <span className="leading-none">E</span>
            </kbd>
          </Button>
        </motion.div>
      </motion.header>
      <ExportDialog open={exportOpen} onOpenChange={setExportOpen} />
    </>
  );
}
