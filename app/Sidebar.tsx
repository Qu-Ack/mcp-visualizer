import React from "react";

export default function SideBar() {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="border border-black bg-white text-black"
        onDragStart={onDragStart}
        draggable
      >
        Input Node
      </div>
      <div
        className="border border-black bg-yellow text-red-300"
        onDragStart={onDragStart}
        draggable
      >
        Default Node
      </div>
    </aside>
  );
}
