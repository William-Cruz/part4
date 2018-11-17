import React, { Component } from "react";

class Vehicle extends Component {
    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.loadVehicle(id);
    }

    render() {
        return (
            <div>
                <h3>{"" + this.props.vehicle.year + this.props.vehicle.make + this.props.vehicle.model}</h3>
                <h3>Vehicle Year: {this.props.vehicle.year}</h3>
                <h3>Vehicle Make: {this.props.vehicle.make}</h3>
                <h3>Vehicle Model: {this.props.vehicle.model}</h3>
            </div>
        )
    }
}

export default Vehicle;