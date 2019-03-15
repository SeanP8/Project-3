import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
// import API, { saveUserFav } from "../utils/API";
import { getAllProjects } from "../utils/API";
import HomeNav from "../components/HomeNav";
import Favorite from "../components/FavoriteComp";
import Footer from "../components/Footer";

class AllProjectsPage extends Component {
  state = {
    projects: [],
    data: { favorite: "" },
    currentPage: 1,
    pageSize: 5
  };
  async componentDidMount() {
    const { data: projects } = await getAllProjects();
    console.log(projects);
    this.setState({ projects });
  }
  // loadProjects = () => {
  //   API.getAllProjects()
  //     .then(res => this.setState({ projects: res.data }))
  //     .catch(err => console.log(err));
  // };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  // handleFavorite = async project => {
  //   // const { data: projects } = await saveUserFav();
  //   const projects = [...this.state.projects];
  //   const index = projects.indexOf(project);
  //   // console.log(index);
  //   projects[index] = { ...projects[index] };
  //   projects[index].favorited = !projects[index].favorited;
  //   console.log(index);
  //   this.setState({ projects });
  //   await saveUserFav(index);
  // };

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
          <p>There are {count} tech start ups available for funding!!</p>
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
                  <td>
                    <Link to={"/project/" + project.id}>View Project</Link>
                  </td>
                  <td>{project.description}</td>
                  <td>{project.image}</td>
                  <td>
                    {/* <Favorite
                      favorited={project.favorited}
                      onClick={() => this.handleFavorite(project)}
                    /> */}
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
