import axios from "axios";

const auth = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

function submitNewClub(club) {
  return clubs.post("/signup", club).then(response => {
    return response.data;
  });
}

export default {
  submitNewClub
};
