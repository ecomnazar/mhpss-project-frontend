interface Props {
  fullname: string;
  email: string;
  id: string;
  region: string;
  gender: string;
}

export const setUser = ({ fullname, email, id, region, gender }: Props) => {
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", email);
  localStorage.setItem("id", id);
  localStorage.setItem("region", region);
  localStorage.setItem("gender", gender);
};

export const removeUser = () => {
  localStorage.removeItem("fullname");
  localStorage.removeItem("email");
  localStorage.removeItem("id");
  localStorage.removeItem("region");
  localStorage.removeItem("gender");
};

export const getUserFullname = () => localStorage.getItem("fullname");
export const getUserEmail = () => localStorage.getItem("email");
export const getUserId = () => localStorage.getItem("id");
export const getUserRegion = () => localStorage.getItem("region");
export const getUserGender = () => localStorage.getItem("gender");
