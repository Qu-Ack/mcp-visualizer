import React from "react";
import { useDnd } from "./dndProvider";
import Tool from "./Tool";

export default function SideBar() {
  const { _, setType } = useDnd();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    type: string,
  ) => {
    setType(type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="border border-black bg-yellow text-red-300"
        onDragStart={(e) => {
          onDragStart(e, "tool");
        }}
        draggable
      >
        Tool
      </div>
      <div
        className="border border-black bg-yellow text-red-300"
        onDragStart={(e) => {
          onDragStart(e, "prompt");
        }}
        draggable
      >
        Prompt
      </div>
    </aside>
  );
}
