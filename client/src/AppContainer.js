import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts,loadProducts,loadVehicles,loadComments} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function () {
      dispatch(loadContacts());
    },
    loadProducts: function () {
      dispatch(loadProducts());
    },
    loadVehicles: function () {
      dispatch(loadVehicles());
    },
    loadComments: function () {
      dispatch(loadComments());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
