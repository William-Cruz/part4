import React, { Component } from "react";

class Product extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.loadProduct(id);
    }

    render() {
        return (
            <div>
                <h3>Product Name: {this.props.product.name}</h3>
                <h3>Product desc: {this.props.product.description}</h3>
            </div>
        )
    } 
}

export default Product;
