import { create } from "zustand";

interface GlobalState {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()((set, get) => ({
  openNav: false,
  setOpenNav: (value) => {
    const openNav = get().openNav;
    if (openNav) {
      alert("close menu");
    } else {
      set({ openNav: value });
    }
  },
}));
