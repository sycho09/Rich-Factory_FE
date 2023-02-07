import axios from "axios";

export const factory_API = axios.create({
  // baseURL: "https://www.richfactory.click",
  baseURL: "https://strapi-test-app.onrender.com/api",
});
