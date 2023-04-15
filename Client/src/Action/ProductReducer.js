import axios from "axios";

export const getProductRequest = () => {
  return { type: "PRODUCT_REQUEST" };
};

export const getProductSuccess = (products) => {
  return { type: "PRODUCT_SUCCESS", payload: products };
};

export const getProductFailure = (error) => {
  return { type: "PRODUCT_FAILURE", payload: error };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios
      .get("/api/products")
      .then((response) => {
        const products = response.data;
        dispatch(getProductSuccess(products));
      })
      .catch((error) => {
        const errorMessage = `Failed to get products: ${error}`;
        dispatch(getProductFailure(error.message));
    });
};
};