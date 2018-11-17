import React, { Component } from "react";

class Contact extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.loadContact(id)
    }

    render() {
        return (
            <div>
                <h3>Name: {this.props.contact.name}</h3>
                <h3>Occupation: {this.props.contact.occupation}</h3>
                <h3>Avatar: {this.props.contact.avatar}</h3>
            </div>
        )
    }
}

export default Contact;