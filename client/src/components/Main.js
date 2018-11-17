import React from "react";
import ContactsContainer from "../containers/ContactsContainer";
import ProductsContainer from "../containers/ProductsContainer";
import VehiclesContainer from "../containers/VehiclesContainer";
import CommentsContainer from "../containers/CommentsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

function Contacts() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Comments </h1>
        <CommentsContainer />
        <h1>Contacts</h1>
        <ContactsContainer />
        <h1>Vehicles</h1>
        <VehiclesContainer />
        <h1>Products</h1>
        <ProductsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
export default Contacts;
