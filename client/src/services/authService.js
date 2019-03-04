import http from "./httpService";

const apiEndpoint = "/api/current_user";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}

