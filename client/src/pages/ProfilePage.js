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
                })
            }
        })
    }

    render() {

        return (
            <Wrapper>
                <Nav />
                <ImageInput
                    image="Avatar"
                    action="/api/add_image"
                ></ImageInput>
                <form>
                    <labe>Change Username</labe>
                    <input></input>
                    <input type="submit" value="Submit"></input>
                </form>
               
            </Wrapper>
        );
    }
}

export default ProfilePage;