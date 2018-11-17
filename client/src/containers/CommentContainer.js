import { connect } from "react-redux";
import Comment from "../components/Comment";
import { loadComment } from "../actions/index";

const mapStateToProps = (state) => ({comment: state.comment});
const mapDispatchToProps = (dispatch) => ({
    loadComment: (id) => {dispatch(loadComment(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);