const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PRODUCT_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case "PRODUCT_SUCCESS":
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
  
      case "PRODUCT_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  