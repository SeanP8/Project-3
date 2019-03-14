import http from "./httpService";

const apiEndpoint = "/api/user";

export function register(user) {
  return http.post(apiEndpoint, {
    firstname: user.firstname,
    lastname: user.lastName,
    email: user.email,

    password: user.password
  });
}
