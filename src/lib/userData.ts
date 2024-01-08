interface Props {
  fullname: string;
  email: string;
}

export const setUser = ({ fullname, email }: Props) => {
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", email);
};

export const removeUser = () => {
  localStorage.removeItem("fullname");
  localStorage.removeItem("email");
};

export const getUserFullname = () => localStorage.getItem("fullname");
export const getUserEmail = () => localStorage.getItem("email");
