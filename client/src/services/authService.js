import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/login";

export function login(email, password) {
  return http.post(apiEndpoint, { username: email, password: password });
}
