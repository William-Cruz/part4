import { connect } from "react-redux";
import Comments from "../components/Comments";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(Comments);
