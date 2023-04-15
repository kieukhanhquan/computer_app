import axios from "axios";

export const getProductRequest = () => {
  return { type: "PRODUCT_REQUEST" };
};

export const getAllProductSuccess = (products) => {
  return { type: "PRODUCT_SUCCESS", payload: products };
};

export const getProductFailure = (error) => {
  return { type: "PRODUCT_FAILURE", payload: error };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(getProductRequest());
    axios
      .get("http://localhost/WebApp/Server/index.php/product")
      .then((response) => {
        const products = response.data;
        dispatch(getAllProductSuccess(products));
      })
      .catch((error) => {
        const errorMessage = `Failed to get products: ${error}`;
        dispatch(getProductFailure(error.message));
    });
};
};