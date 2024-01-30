import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { getUserEmail, setUser } from "../lib/userData";
import i18n from "../i18n";
import { saveAs } from "file-saver";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_API = import.meta.env.VITE_BASE_API;

interface User {
  certificate_key: null | string;
  date: null | string;
  email: string;
  finish_date: null | string;
  fullname: string;
  gender: string;
  id: number;
  region: string;
}

interface RegisterProps {
  id?: string;
  fullname?: string;
  email: string;
  password?: string;
  region?: string;
  gender?: string;
}

interface State {
  users: User[];
  registerLoading: boolean;
  loginLoading: boolean;
  editLoading: boolean;
  getCertifiacteLoading: boolean;
  isModalActive: boolean;
  isEditModalActive: boolean;
}

interface Action {
  registerUserApi: (data: RegisterProps) => void;
  loginUserApi: (data: RegisterProps) => void;
  editUserApi: (data: RegisterProps) => void;
  getUsers: () => void;
  updateFinishDate: () => void;
  downloadPdfApi: () => void;
  getCertifiacteApi: (fullname: string, id: string, mail: string) => void;
  updateFeedback: (feedback: any[], email: string) => void;
  setIsModalActive: () => void;
  setIsModalDisable: () => void;
  setIsEditModalActive: () => void;
  setIsEditModalDisable: () => void;
}

export const useUserStore = create<State & Action>((set) => ({
  users: [],
  registerLoading: false,
  loginLoading: false,
  editLoading: false,
  getCertifiacteLoading: false,
  isModalActive: false,
  isEditModalActive: false,
  setIsModalActive: () => {
    set(() => ({
      isModalActive: true,
      // isModalActive: state.isModalActive ? false : true,
    }));
  },
  setIsModalDisable: () => {
    set(() => ({
      isModalActive: false,
      // isModalActive: state.isModalActive ? false : true,
    }));
  },
  setIsEditModalActive: () => {
    set(() => ({
      isEditModalActive: true,
    }));
  },
  setIsEditModalDisable: () => {
    set(() => ({
      isEditModalActive: false,
    }));
  },
  registerUserApi: async (data: RegisterProps) => {
    set({ registerLoading: true });
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ isModalActive: false });
      toast.success("Account created successfully");
      setUser({
        fullname: response.data.fullname,
        email: response.data.email,
        certificate_key: response.data.certificate_key,
        region: response.data.region,
        gender: response.data.gender,
      });
      // setTimeout(() => {
      //   window.location.replace("/");
      // }, 1000);
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
      const response = await axios.post(`${BASE_URL}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ isModalActive: false });
      toast.success(i18n.t("loginsuccess"));
      setUser({
        fullname: response.data.fullname,
        email: response.data.email,
        certificate_key: response.data.certificate_key,
        region: response.data.region,
        gender: response.data.gender,
      });
      return response.data;
    } catch (error) {
      //@ts-ignore
      toast.error(i18n.t(error.response.data));
      return Promise.reject(error);
    } finally {
      set({ loginLoading: false });
    }
  },
  editUserApi: async (data) => {
    set({ editLoading: true });
    try {
      const response = await axios.put(`${BASE_URL}/update`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      set({ isEditModalActive: false });
      setUser({
        fullname: response.data.fullname,
        email: response.data.email,
        certificate_key: response.data.certificate_key,
        region: response.data.region,
        gender: response.data.gender,
      });
      toast.success(i18n.t("editsuccess"));
      return response.data;
    } catch (error) {
      //@ts-ignore
      toast.error(i18n.t(error.response.data));
      return Promise.reject(error);
    } finally {
      set({ editLoading: false });
    }
  },
  getCertifiacteApi: async (fullname, id, mail) => {
    set({ getCertifiacteLoading: true });
    try {
      const response = await axios.post(`${BASE_API}/api/v1/certificate`, {
        fullname,
        id,
        mail,
      });
      toast.success("certficate created successfully");
      return response.data;
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data);
      return Promise.reject(error);
    } finally {
      set({ getCertifiacteLoading: false });
    }
  },
  downloadPdfApi: async () => {
    const getPdf = async () => {
      return await axios.get(`${BASE_URL}/download-pdf-1`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "arraybuffer",
      });
    };

    //

    const printPdf = async () => {
      const { data } = await getPdf();
      const blob = new Blob([data], { type: "application/pdf" });
      saveAs(blob, "success.pdf");
    };

    //

    printPdf();
  },
  getUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      set({ users: response.data });
      return response.data;
    } catch (error) {}
  },
  updateFinishDate: async () => {
    const date =
      new Date().getFullYear() +
      "-" +
      new Date().getDate() +
      "-" +
      new Date().getDay();
    const email = getUserEmail();
    const data = {
      date,
      email,
    };

    try {
      const response = await axios.put(`${BASE_URL}/updateFinishDate`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {}
  },
  updateFeedback: async (feedback, email) => {
    const data = {
      feedback,
      email,
    };
    try {
      const response = await axios.put(`${BASE_URL}/updateFeedback`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
}));
