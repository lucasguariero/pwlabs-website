"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { BudgetModal } from "@/components/BudgetModal";

type Ctx = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BudgetContext = createContext<Ctx | null>(null);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <BudgetContext.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
      <BudgetModal open={open} onClose={() => setOpen(false)} />
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const ctx = useContext(BudgetContext);
  if (!ctx) {
    throw new Error("useBudget deve ser usado dentro de <BudgetProvider>");
  }
  return ctx;
}
