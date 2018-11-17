import {combineReducers} from "redux";

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}
function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}
function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}
function contacts(state = [], action) {
  if (action.type === "CONTACTS_LOADED") {
    return action.value;
  }
  return state;
}

function comment(state = [], action) {
  if (action.type === "GET_COMMENT_DONE") {
    return action.value;
  }
  return state;
}

function contact(state = [], action) {
  if (action.type === "GET_CONTACT_DONE") {
    return action.value;
  }
  return state;
}

function product(state = [], action) {
  if (action.type === "GET_PRODUCT_DONE") {
    return action.value;
  }
  return state;
}

function vehicle(state = [], action) {
  if (action.type === "GET_VEHICLE_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,products,vehicles,contacts,comment,contact,product,vehicle
});
export default rootReducer;
