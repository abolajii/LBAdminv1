import { create } from "zustand";

const useTabStore = create((set) => ({
  selectedTabIndex: 0,
  setSelectedTabIndex: (index) => set({ selectedTabIndex: index }),
}));

export const useTab = () => useTabStore();
