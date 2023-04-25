import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";



  
export const fetchCart = createAsyncThunk(
  "fetchCart",
async (data, { dispatch }) => {
    try {
        const response = await axios.get(`http://localhost/WebApp/Server/index.php/possess?$ClientID=${data.ID}`)
        return response.data
    }
    catch (err) {
        alert(err.response.data)
    }
});

export const updateQuantity = createAsyncThunk(
  "updateQuantity",
  async (data, {dispatch}) => {
      try {
          await axios.put(`http://localhost/WebApp/Server/index.php/possess`, {
              ProductID : data.ProductID,
              quantity : data.quantity
          })
          await dispatch(fetchCart(data.user));
      }
      catch (err) {
          alert(err.response.data)
      }
  }
)

  export const addtoCart = createAsyncThunk(
    "addtoCart",
    async (data, { dispatch, getState }) => {
      
      try {
        await dispatch(fetchCart(data.user));
        const existItem = getState().cart.cart.find(item => item.ProductID === data.product.ID);
          if(existItem){
            const quantity = parseInt(existItem.quantity) + parseInt(data.quantity);
            const ProductID = data.product.ID;
            const user = data.user;
            await dispatch(updateQuantity({ProductID,quantity,user}))
          }
          else{
            const cartID = getState().cart.cart[0].CartID;
            const newquantity = data.quantity;
            const ID = data.product.ID;
            const ClientID = data.user.ID;
            await axios.post('http://localhost/WebApp/Server/index.php/possess', {
              ProductID: ID,
              CartID: cartID,
              ClientID: ClientID,
              quantity: newquantity,
          })
        }
        toast.success(`Sản phẩm đã được thêm vào giỏ hàng! Số lượng thêm:${data.quantity}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      catch (err) {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  )

  export const deleteCartItem = createAsyncThunk(
    "deleteCartItem",
    async (data, {dispatch}) => {
        try {
            const ProductID = data.ProductID;
            const ClientID = data.user.ID;
            await axios.delete('http://localhost/WebApp/Server/index.php/possess',
            { data:{
              ProductID: ProductID,
              ClientID: ClientID,
              }
          });
            
            await dispatch(fetchCart(data.user))
        }
        catch (err) {
            alert(err.response.data)
        }
    }
  )



const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: [],
    loader: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loader = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(updateQuantity.pending, (state, action) => {
        state.loader = true
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(addtoCart.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(addtoCart.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
      })
      .addCase(addtoCart.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(deleteCartItem.pending, (state, action) => {
        state.loader = true
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
          state.loader = false
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
          state.loader = false
      })
  },
});

export default cartSlice.reducer;
