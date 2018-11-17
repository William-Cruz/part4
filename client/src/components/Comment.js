import React, { Component } from "react";

class Comment extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.loadComment(id);
    }

    render() {
        return (
            <div>
                <h3>{this.props.comment.body}</h3>
            </div>
        )
    }
}

export default Comment;
