import axios from "axios";
import { appConfig } from "./config";

const APP_PLATFORM = "Web";

export const request = axios.create({
  headers: {
    app_platform: APP_PLATFORM,
    app_version: 1,
  },
});

export function setupHttpConfig() {
  request.defaults.baseURL = appConfig.booksEndPoint;
  request.defaults.timeout = appConfig.defaultTimeout;
  axios.defaults.headers["Content-Type"] = "application/json";
}
