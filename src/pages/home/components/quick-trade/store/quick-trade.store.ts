import { create } from "zustand";

type QuickTradeStoreProps = {
  option: "buy" | "sell";
  setOption: (option: "buy" | "sell") => void;
};

export const useQuickTradeStore = create<QuickTradeStoreProps>((set) => ({
  option: "buy",
  setOption: (option) => set({ option }),
}));
