import React, { Component } from 'react';

class Comments extends Component {
    state = {
        value: ""
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>
                    Comments:
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button className="btn btn-info" type="submit">Submit</button>
            </form>
        );
    }
}

export default Comments;