import { connect } from "react-redux";
import Contact from "../components/Contact";
import { loadContact } from "../actions/index";

const mapStateToProps = (state) => ({contact: state.contact});
const mapDispatchToProps = (dispatch) => ({
    loadContact: (id) => {dispatch(loadContact(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact)