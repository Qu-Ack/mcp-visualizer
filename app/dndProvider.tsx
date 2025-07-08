import { createContext, useContext } from "react";
import { useState } from "react";

type DndContextType = {
  type: string | null;
  setType: (type: string | null) => void;
};

const DndContext = createContext<DndContextType>({
  type: null,
  setType: () => {},
});

export function DndProvider({ children }: { children: React.ReactNode }) {
  const [type, setType] = useState<string | null>(null);

  return (
    <DndContext.Provider value={{ type, setType }}>
      {children}
    </DndContext.Provider>
  );
}

export function useDnd() {
  const context = useContext(DndContext);

  if (!context) {
    throw new Error("useDnD must be used within a DnDProvider");
  }

  return context;
}
