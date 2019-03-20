import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import ImageInput from "../components/ImageInputForm";
import Nav from "../components/HomeNav";
import Footer from "../components/Footer";
import API from "../utils/API";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
  }
  state = {
    user: {}
  };

  componentDidMount() {
    API.getCurrentUser().then(response => {
      const currentUser = response.data;
      if (currentUser) {
        this.setState({
          user: currentUser
        });
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newUserName = this.nameRef.current.value;
    API.updateUserName({
      name: newUserName
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location.href = "/home";
  };

  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <div className="edit-profile">
            <ImageInput image="Avatar" action="/api/add_image" />
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputName">Change Username</label>
                <input
                  type="text"
                  id="inputName"
                  ref={this.nameRef}
                  className="form-control"
                  name="name"
                />
                <button className="btn btn-info" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default ProfilePage;
