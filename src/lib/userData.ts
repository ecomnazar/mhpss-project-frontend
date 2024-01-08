interface Props {
  fullname: string;
  email: string;
  id: string;
}

export const setUser = ({ fullname, email, id }: Props) => {
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", email);
  localStorage.setItem("id", id);
};

export const removeUser = () => {
  localStorage.removeItem("fullname");
  localStorage.removeItem("email");
  localStorage.removeItem("id");
};

export const getUserFullname = () => localStorage.getItem("fullname");
export const getUserEmail = () => localStorage.getItem("email");
export const getUserId = () => localStorage.getItem("id");
