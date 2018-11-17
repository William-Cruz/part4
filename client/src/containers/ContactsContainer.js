import { connect } from "react-redux";
import Contacts from "../components/Contacts";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(mapStateToProps)(Contacts);
