import axios from "axios";

const apiCLinet = axios.create({
  baseURL: "https://61c4fb80f1af4a0017d998a5.mockapi.io/store-api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiCLinet.get("/products");
  },
  //Added new call
  getEvent(id) {
    return apiCLinet.get("/products/" + id);
  },
};
