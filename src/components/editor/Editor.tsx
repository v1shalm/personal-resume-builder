"use client";

import { useEffect, useState } from "react";
import { Topbar } from "./Topbar";
import { PreviewPane } from "./PreviewPane";
import { EditorPanel } from "./EditorPanel";

export function Editor() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-ink-bg">
        <div className="flex items-center gap-2 font-mono text-[11px] text-ink-subtle">
          <span className="h-1 w-1 animate-pulse rounded-full bg-ink-muted" />
          Loading
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-ink-bg text-ink-text">
      <Topbar />
      <div className="grid flex-1 overflow-hidden grid-cols-[minmax(0,1fr)_440px]">
        <PreviewPane />
        <EditorPanel />
      </div>
    </div>
  );
}
