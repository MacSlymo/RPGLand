import axios from "axios";

const clubs = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

function submitNewClub(club) {
  return clubs.post("/clubs", club).then(response => {
    return response.data;
  });
}

export default {
  submitNewClub
};
