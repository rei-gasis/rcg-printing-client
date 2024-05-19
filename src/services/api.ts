import axios, { AxiosError, AxiosResponse } from "axios";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost";
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "5000";

axios.defaults.baseURL =
  SERVER_URL +
  (import.meta.env.VITE_SERVER_PORT != ""
    ? ":".concat(import.meta.env.VITE_SERVER_PORT)
    : "");

export const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Quote = {
  create: (data: any) => {
    axios.interceptors.request.use((config: any) => {
      if (config.headers) {
        config.headers["Content-Type"] = "multipart/form-data";
      }
      return config;
    });

    const res = requests.post("/api/customer-req/req-quote", data);
    return res;
  },
};

export { Quote };
