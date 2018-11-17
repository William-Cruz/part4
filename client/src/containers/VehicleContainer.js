import { connect } from "react-redux";
import Vehicle from "../components/Vehicle";
import { loadVehicle } from "../actions/index";

const mapStateToProps = (state) => ({vehicle: state.vehicle});
const mapDispatchToProps = (dispatch) => ({
    loadVehicle: (id) => {dispatch(loadVehicle(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);