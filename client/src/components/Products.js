import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Products(props) {
  return (
    <CollapsableMapper data={props.products} path="product" field="name" />
  );
}
export default Products;
