interface Props {
  fullname: string;
  email: string;
  certificate_key: string;
  region: string;
  gender: string;
}

export const setUser = ({
  fullname,
  email,
  certificate_key,
  region,
  gender,
}: Props) => {
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", email);
  localStorage.setItem("certificate_key", certificate_key);
  localStorage.setItem("region", region);
  localStorage.setItem("gender", gender);
};

export const removeUser = () => {
  localStorage.removeItem("fullname");
  localStorage.removeItem("email");
  localStorage.removeItem("certificate_key");
  localStorage.removeItem("region");
  localStorage.removeItem("gender");
};

export const getUserFullname = () => localStorage.getItem("fullname");
export const getUserEmail = () => localStorage.getItem("email");
export const getUserCertificateKey = () =>
  localStorage.getItem("certificate_key");
export const getUserRegion = () => localStorage.getItem("region");
export const getUserGender = () => localStorage.getItem("gender");
