import axios from "axios";

export const API = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/search?query=",
});
