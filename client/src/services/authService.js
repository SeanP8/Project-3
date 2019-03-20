import http from "./httpService";

const apiEndpoint = "/api/login";

export function login(email, password) {
  return http.post(apiEndpoint, { username: email, password: password });
}

