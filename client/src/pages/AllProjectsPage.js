import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
import API from "../utils/API";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

class AllProjectsPage extends Component {
  state = {
    projects: {},
    currentPage: 1,
    pageSize: 5
  };
  componentDidMount() {
    this.loadProjects();
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
      <div>
        <HomeNav />
        <Wrapper>
          <div>
            <h1 className="subTitle">Projects</h1>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="title">Title</th>
                <th className="link">Link</th>
                <th className="desc">Description</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr>
                  <td>{project.title}</td>
                  <td><Link to={"/project/" + project.id}>View Project</Link></td>
                  <td>{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default AllProjectsPage;
