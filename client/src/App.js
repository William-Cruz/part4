import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import CommentContainer from "./containers/CommentContainer";
import ContactContainer from "./containers/ContactContainer";
import ProductContainer from "./containers/ProductContainer";
import VehicleContainer from "./containers/VehicleContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/comment/:id" component={CommentContainer} />
            <Route path="/contact/:id" component={ContactContainer} />
            <Route path="/product/:id" component={ProductContainer} />
            <Route path="/vehicle/:id" component={VehicleContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}
export default (App);


