import http from "./httpService";

const apiEndpoint = "/api/user";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    firstname: user.firstname,
    lastname: user.lastname
  });
  
}
