// import axios from "axios";

const getCurrentUser = () => {
  return localStorage.getItem(`user`);
};

const authService = { getCurrentUser };
export default authService;
