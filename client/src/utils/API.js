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
    updateProject: function(id) {
        return axios.put("/api/projects/" + id);
    },
    deleteProject: function(id) {
        return axios.delete("/api/projects/" + id);
    }  
};
