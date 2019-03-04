import http from "./httpService";

const apiEndpoint = "/api/current_user";

export function login(email, password) {
  return http.get(apiEndpoint, { username: email, password: password });
}
