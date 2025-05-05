// stores/useDataStore.ts
import { create } from "zustand";

export const useDataStore = create((set) => ({
  data: null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: (data: any) => set({ data }),
}));
