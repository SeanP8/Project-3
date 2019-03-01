import http from "./httpService";
// import { apiUrl } from "../../src/config.json"; //<<<<----------- I dont see this file????

const apiEndpoint = "http://localhost:5000/api/user";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    firstname: user.firstname,
    lastname: user.lastname
  });
}
