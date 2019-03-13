import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import ImageInput from "../components/ImageInputForm";
import Nav from "../components/HomeNav";
import API from "../utils/API";

class ProfilePage extends Component {
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

  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <div className="edit-profile">
            <ImageInput image="Avatar" action="/api/add_image" />
            <hr/>
            <form>
              <div className="form-group">
                <label htmlFor="inputName">Change Username</label>
                <input type="text" id="inputName" className="form-control" name="name"/>
                <button className="btn btn-info" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default ProfilePage;
