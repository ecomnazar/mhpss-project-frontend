import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

interface RegisterProps {
  fullname?: string;
  email: string;
  password: string;
  region?: string;
  gender?: string;
}

interface State {
  registerLoading: boolean;
  loginLoading: boolean;
  isModalActive: boolean;
}

interface Action {
  registerUserApi: (data: RegisterProps) => void;
  loginUserApi: (data: RegisterProps) => void;
  setIsModalActive: () => void;
}

export const useUserStore = create<State & Action>((set) => ({
  registerLoading: false,
  loginLoading: false,
  isModalActive: false,
  setIsModalActive: () => {
    set((state) => ({ isModalActive: !state.isModalActive }));
  },
  registerUserApi: async (data: RegisterProps) => {
    set({ registerLoading: true });
    try {
      const response = await axios.post("http://localhost:4002/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ isModalActive: false });
      toast.success("Account created successfully");
      localStorage.setItem("fullname", response.data.fullname);
      localStorage.setItem("email", response.data.email);
      return response.data;
    } catch (error) {
    } finally {
      set({ registerLoading: false });
    }
  },
  loginUserApi: async (data) => {
    set({ loginLoading: true });
    try {
      const response = await axios.post("http://localhost:4002/signin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ isModalActive: false });
      toast.success("Login successfully");
      localStorage.setItem("fullname", response.data.fullname);
      localStorage.setItem("email", response.data.email);
      return response.data;
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data);
      return Promise.reject(error);
    } finally {
      set({ loginLoading: false });
    }
  },
}));
