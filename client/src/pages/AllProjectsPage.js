import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
import { getAllProjects } from "../utils/API";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

class AllProjectsPage extends Component {
  state = {
    projects: [],
    data: { favorite: "" },
    currentPage: 1,
    pageSize: 2
  };
  async componentDidMount() {
    const { data: projects } = await getAllProjects();
    console.log(projects);
    this.setState({ projects });
  }

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
          <h1 className="subTitle">Projects</h1>
          <p className="sublead">
            There are {count} tech start ups available for funding!!
          </p>
          <table className="table" id="allProjects">
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
                  <td>
                    <Link to={"/project/" + project.id}>View Project</Link>
                  </td>
                  <td>{project.description}</td>
                  <td>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: 300, height: 300 }}
                    />
                  </td>
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
        <Footer />
      </div>
    );
  }
}

export default AllProjectsPage;
