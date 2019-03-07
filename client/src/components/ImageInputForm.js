import React, { Component } from "react";

import Wrapper from "./Wrapper";


class ImageInputForm extends Component {
    state = {
        data: { image: "" },
        errors: {}
    };


    doSubmit = async () => {

    };


    render() {
        return (
            <Wrapper>
                <form className="imageForm"  action="http://localhost:5000/api/add_image" enctype="multipart/form-data" method="post">
                    <div className="form_line">
                        <label for="photo_image">Change {this.props.imageName}</label>
                        <div className="form_controls">
                            <input id="photo_image" name="image" type="file" />
                            <input id="photo_image_cache" name="image_cache" type="hidden" />
                        </div>
                    </div>
                    <div className="form_line">
                        <div className="form_controls">
                            <input name="commit" type="submit" value="Submit Photo" />

                        </div>
                    </div>
                </form>
            </Wrapper>

        );
    }
}

export default ImageInputForm;