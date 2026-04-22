"use client";

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AnimatePresence, motion } from "motion/react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { rowFadeUp } from "@/lib/motion";

type SortableListProps<T extends { id: string }> = {
  items: T[];
  onReorder: (fromId: string, toId: string) => void;
  renderItem: (item: T, handleProps: { dragAttrs: Record<string, unknown>; dragListeners: Record<string, unknown> | undefined }) => React.ReactNode;
};

export function SortableList<T extends { id: string }>({
  items,
  onReorder,
  renderItem,
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    onReorder(String(active.id), String(over.id));
  };

  void arrayMove;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-2">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {(handleProps) => renderItem(item, handleProps)}
              </SortableItem>
            ))}
          </AnimatePresence>
        </div>
      </SortableContext>
    </DndContext>
  );
}

function SortableItem({
  id,
  children,
}: {
  id: string;
  children: (handleProps: {
    dragAttrs: Record<string, unknown>;
    dragListeners: Record<string, unknown> | undefined;
  }) => React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  return (
    <motion.div
      ref={setNodeRef}
      variants={rowFadeUp}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        // Compose dnd-kit transform with motion's opacity/filter. We use style
        // (not animate) for dnd-kit's transform so it doesn't fight motion's
        // spring on active drag.
        transform: CSS.Transform.toString(transform) || undefined,
        transition,
      }}
      className={cn(
        "touch-none",
        isDragging && "relative z-10 opacity-95 [&>*]:shadow-[0_12px_32px_-8px_oklch(0_0_0_/_0.45),0_4px_8px_-4px_oklch(0_0_0_/_0.35)]",
      )}
    >
      {children({
        dragAttrs: attributes as unknown as Record<string, unknown>,
        dragListeners: listeners as unknown as Record<string, unknown> | undefined,
      })}
    </motion.div>
  );
}

export function DragHandle({
  dragAttrs,
  dragListeners,
  className,
}: {
  dragAttrs: Record<string, unknown>;
  dragListeners: Record<string, unknown> | undefined;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      aria-label="Drag to reorder"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 500, damping: 26, mass: 0.5 }}
      className={cn(
        "flex h-8 w-7 shrink-0 cursor-grab items-center justify-center rounded-md text-ink-muted/60 transition-colors duration-150 hover:bg-ink-bg hover:text-ink-text active:cursor-grabbing",
        className,
      )}
      {...dragAttrs}
      {...dragListeners}
    >
      <GripVertical className="h-4 w-4" aria-hidden />
    </motion.button>
  );
}
