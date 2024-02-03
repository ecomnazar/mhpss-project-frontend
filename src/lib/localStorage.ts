// NOTE: LS means Local Storage
export const getThemeLS = () => localStorage.getItem("theme");

export const getTickLS = () => localStorage.getItem("tick");

export const getActiveDayLS = () => localStorage.getItem("activeDay") || "0";

export const getActiveDayThemeLS = () =>
  localStorage.getItem("activeDayTheme") || "0";

export const getFinishLS = () => localStorage.getItem("finish");

export const getCertificateId = () => localStorage.getItem("certificate_key");

export const getLngLS = () => localStorage.getItem("lng") || "en";

// SET

export const setThemeLS = (data: string) => localStorage.setItem("theme", data);

export const setTickLs = (data: string) => localStorage.setItem("tick", data);

export const setActiveDayLS = (data: string) =>
  localStorage.setItem("activeDay", data);

export const setActiveDayThemeLS = (data: string) =>
  localStorage.setItem("activeDayTheme", data);

export const setFinishLS = () => localStorage.setItem("finish", "true");

export const setLngLS = (lng: string) => localStorage.setItem("lng", lng);
