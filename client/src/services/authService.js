import http from "./httpService";

const apiEndpoint = "http:localhost:5000/api/current_user";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
