import { create } from "zustand";

interface State {
  isModalActive: boolean;
}

interface Action {
  setIsModalActive: () => void;
}

const INITIAL_STATE: State = {
  isModalActive: false,
};

export const useModalStore = create<State & Action>((set) => ({
  isModalActive: INITIAL_STATE.isModalActive,
  setIsModalActive: () =>
    set((state) => ({ isModalActive: !state.isModalActive })),
}));
