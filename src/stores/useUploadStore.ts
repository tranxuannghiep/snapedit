import { create } from "zustand";

export const useUploadStore = create((set) => ({
  file: null,
  setFile: (file: any) => set({ file }),
}));
