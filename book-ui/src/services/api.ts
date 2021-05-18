import axios from "axios";

const myBookApi = axios.create({
  baseURL: "https://www.goob",
});

export { googleApi, myBookApi };
