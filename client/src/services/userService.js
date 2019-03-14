import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/user";

export function register(user) {
  return http.post(apiEndpoint, {
    firstname: user.firstname,
    lastname: user.lastName,
    email: user.email,

    password: user.password
  });
}
