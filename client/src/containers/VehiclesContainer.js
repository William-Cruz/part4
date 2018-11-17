import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

export default connect(mapStateToProps)(Vehicles);
