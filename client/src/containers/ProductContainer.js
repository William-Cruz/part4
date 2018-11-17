import { connect } from "react-redux";
import Product from "../components/Product";
import { loadProduct } from "../actions/index";

const mapStateToProps = (state) => ({product: state.product});
const mapDispatchToProps = (dispatch) => ({
    loadProduct: (id) => {dispatch(loadProduct(id))}
}); 

export default connect( mapStateToProps, mapDispatchToProps )(Product)