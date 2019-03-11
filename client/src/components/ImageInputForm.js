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
        var {image, action} = this.props;
        return (
            <div>
                <form className="imageForm"  action={action} enctype="multipart/form-data" method="post">
                    <div className="form_line">
                        <label for="photo_image">Change {image}</label>
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
            </div>

        );
    }
}

export default ImageInputForm;