import axios from "axios";

export default {
  getAllProjects: function() {
    return axios.get("/api/projects/all");
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
