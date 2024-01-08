import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

interface RegisterProps {
  fullname: string;
  email: string;
  password: string;
  region: string;
  gender: string;
}

interface State {
  registerLoading: boolean;
  registerData: RegisterProps;
}

interface Action {
  registerUserApi: (data: RegisterProps) => void;
}

export const useUserStore = create<State & Action>((set) => ({
  registerLoading: false,
  registerData: {} as RegisterProps,
  registerUserApi: async (data: RegisterProps) => {
    set({ registerLoading: true });
    try {
      const response = await axios.post("http://localhost:4002/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ registerLoading: false });
      set({ registerData: response.data });
      toast.success("Account created successfully");
      localStorage.setItem("fullname", response.data.fullname);
      localStorage.setItem("email", response.data.email);
      return response.data;
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
    }

    set({ registerLoading: false });
  },
}));
