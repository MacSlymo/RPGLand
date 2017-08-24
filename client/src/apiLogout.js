import axios from "axios";

const auth = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

function logout(vm) {
  localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common.Authorization;
  vm.$root.user = null;
}

export default {
  logout
};
