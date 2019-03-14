import axios from "axios";
const cloud_name = "phelan";
let url = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;
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
    },
    getProject: function(id) {
        return axios.get("/api/project/" + id);
    },
    addToFavorites: function(id) {
        return axios.post("/api/favorites", {projectID: id});
    },
    getUsersFavorites: function() {
        return axios.get("/api/favorites/");
    },
    deleteFavorite: function(id) {
        return axios.delete("/api/favorites/", {projectID: id});
    },
    imageUpload: function(img) {
        return axios.post(url, img);
    },
    updateUserName: function(data) {
        return axios.put("/api/user/update", data)
    },
    submitComment: function(data) {
        return axios.post("/api/comments", data);
    },
    getComments: function() {
        return axios.get("/api/comments");
    }
};
