import { create } from "zustand";

interface State {
  active: [number, number];
  theme: string[];
  tick: string[];
}

interface Action {
  setIsActive: (data: [number, number]) => void;
  setTheme: (data: string[]) => void;
  setTick: (date: string[]) => void;
}

export const useLogicStore = create<State & Action>((set) => ({
  active: [0, 0],
  theme: ["introduction"],
  tick: [""],
  setIsActive: (data) => {
    set(() => ({
      active: data,
    }));
  },
  setTheme: (data) => {
    set(() => ({
      theme: data,
    }));
  },
  setTick: (data) => {
    set(() => ({
      tick: data,
    }));
  },
}));
