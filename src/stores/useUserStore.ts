import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { setUser } from "../lib/userData";
import i18n from "../i18n";

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
      setUser({
        fullname: response.data.fullname,
        email: response.data.email,
        id: response.data._id,
      });
      setTimeout(() => {
        document.location.replace("/profile");
      }, 1000);
      return response.data;
    } catch (error) {
      //@ts-ignore
      toast.error(i18n.t(error.response.data));
      return Promise.reject(error);
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
      toast.success(i18n.t("loginsuccess"));
      setUser({
        fullname: response.data.fullname,
        email: response.data.email,
        id: response.data._id,
      });
      setTimeout(() => {
        document.location.replace("/profile");
      }, 1000);
      return response.data;
    } catch (error) {
      //@ts-ignore
      toast.error(i18n.t(error.response.data));
      return Promise.reject(error);
    } finally {
      set({ loginLoading: false });
    }
  },
}));
