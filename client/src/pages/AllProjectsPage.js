import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
import API from "../utils/API";
import { getAllProjects } from "../utils/API";

class AllProjectsPage extends Component {
  state = {
    projects: [],
    currentPage: 1,
    pageSize: 3
  };
  async componentDidMount() {
    const { data: projects } = await getAllProjects();
    this.setState({ projects });
  }
  loadProjects = () => {
    API.getAllProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.projects;
    const { pageSize, currentPage, projects: allProjects } = this.state;

    const projects = paginate(allProjects, currentPage, pageSize);
    return (
      <Wrapper>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr>
                <td>{project.title}</td>
                <td>{project.link}</td>
                <td>{project.description}</td>
                <td>{project.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>All Projects Page</h2>
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </Wrapper>
    );
  }
}

export default AllProjectsPage;
