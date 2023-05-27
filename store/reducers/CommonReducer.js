import { NEWPRODUCT_LOADING, PRODUCTS_LOADING } from "../types/CommonTypes";

const initialstate = {
  productsLoading: false,
  newProductLoading: false,
};

const CommonReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return { ...state, productsLoading: action.payload };
    case NEWPRODUCT_LOADING:
      return { ...state, newProductLoading: action.payload };
    default:
      return state;
  }
};

export default CommonReducer;
