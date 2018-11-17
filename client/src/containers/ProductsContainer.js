import { connect } from "react-redux";
import Products from "../components/Products";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Products);
