import axios from "axios";
const apiEndpoint = "http://127.0.0.1:5000";
export default {
  getCurrentUser: function() {
    return axios.get("/api/current_user");
  },
  getAllProjects: function() {
    return axios.get("/api/projects/all");
  },
  getTopFiveProjects: function() {
    return axios.get("/api/projects/topfive");
  },
  searchForProjects: function(query) {
    return axios.get("/api/projects/search/" + query);
  },
  getUsersProjects: function() {
    return axios.get("/api/projects/user");
  },
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  updateProject: function(id, data) {
    return axios.put("/api/projects/" + id, data);
  },
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  }
};
export function getAllProjects() {
  return axios.get("/api/projects/all");
}
export function addAuth(auth) {
  return axios.post(apiEndpoint + "/api/addAuth", auth);
}

export function saveUserFav(authId) {
  return axios.put(apiEndpoint + "/api/saveUserFav", authId);
}
