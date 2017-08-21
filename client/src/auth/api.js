import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/api/"
});

const user = {
  username,
  password,
  nickname,
  email,
  tel,
  gm
};
function signup(user) {
  return auth.post("/signup", user).then(response => {
    return response.data;
  });
}

function login(username, password, vm) {
  return auth
    .post("/login", {
      username,
      password
    })
    .then(response => {
      // tell axios to always use the token
      const { token, nickname } = response.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("user.nickname", nickname);
      loadUser(vm);
      return response.data;
    });
}

function secret() {
  return auth.get("/secret").then(response => {
    return response.data;
  });
}

function loadUser(vm) {
  const token = localStorage.jwtToken;
  const nickname = localStorage["user.nickname"];
  if (token) {
    // tell axios to use the token
    axios.defaults.headers.common.Authorization = "Bearer " + token;
    vm.$root.user = {
      token,
      nickname
    };
  }
}

function logout(vm) {
  localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common.Authorization;
  vm.$root.user = null;
}

export default {
  signup,
  login,
  logout,
  secret,
  loadUser
};
