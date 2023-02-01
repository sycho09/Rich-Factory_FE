import { Cookies } from "react-cookie";
import { Cookie } from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: Cookie, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string, option?: any) => {
  return cookies.remove(name, { ...option });
};
