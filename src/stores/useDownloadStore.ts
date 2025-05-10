import { create } from "zustand";

export const useDownloadStore = create((set) => ({
  data: [],
  idDownload: null,
  setData: (data: { id: string; file: string; pathname: string }) =>
    set({ data }),
  setIdDownload: (idDownload: string | null) => set({ idDownload }),
}));
