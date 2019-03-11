import axios from "axios";
const cloud_name = "phelan";
var url = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;
export default {

    getCurrentUser: function() {
        return axios.get("/api/current_user")
    },
    getAllProjects: function() {
        return axios.get("/api/projects/all");
    },
    getTopFiveProjects: function() {
        return axios.get("/api/projects/topfive")
    },
    searchForProjects: function(query) {
        return axios.get("/api/projects/search/" + query)
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
    },
    imageUpload: function(img) {
        return axios.post(url, img);
    }  


};
export function getAllProjects() {
  return axios.get("/api/projects/all");
}
