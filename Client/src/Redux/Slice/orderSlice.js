import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const fetchOrder = createAsyncThunk(
    "fetchOrder",
    async (data, { dispatch }) => {
        try {
            const response = await axios.get("http://localhost/WebApp/Server/index.php/order")
            return response.data
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const filterOrder = createAsyncThunk(
    "filterOrder",
    async (data, { dispatch }) => {
        try {
            console.log(data)
            const response = await axios.post("http://localhost/WebApp/Server/index.php/order?filter=true", {
               filter: data
            })
            return response.data
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const searchOrder = createAsyncThunk(
    "searchOrder",
    async (data, { dispatch }) => {
        try {
            const response = await axios.post("http://localhost/WebApp/Server/index.php/order?search=true", {
               ID: data.ID,
               ClientID: data.CientID
            })
            return response.data
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const orderDetail = createAsyncThunk(
    "orderDetail",
    async (data, {dispatch}) => {
        try {
            const response = await axios.post("http://localhost/WebApp/Server/index.php/order?detail=true", {
                orderID: data
            })
            return response.data
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const orderSpecs = createAsyncThunk(
    "orderSpecs",
    async (data, {dispatch}) => {
        try {
            const response = await axios.get(`http://localhost/WebApp/Server/index.php/order?order=${data}`)
            return response.data
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const updateStatus = createAsyncThunk(
    "updateStatus",
    async (data, {dispatch}) => {
        try {
            await axios.put(`http://localhost/WebApp/Server/index.php/order`, {
                ID: data.id,
                Status: data.status,
                Date: data.date,
                Admin: data.admin
            })
            await dispatch(orderSpecs(data.id))
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const updateProduct = createAsyncThunk(
    "updateproduct",
    async (data, {dispatch}) => {
        try {
            await axios.put(`http://localhost/WebApp/Server/index.php/order?order=${data.ID}`, {
            })
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const addOrder = createAsyncThunk(
    "addOrder",
    async (data,{dispatch}) => {
        try {
            
            const ClientID = data.user.ID;
            const Address = data.user.Address;
            const PayType = data.payType;
            const OrderShip = "100000"
            const OrderFee = data.total;
            const OrderState = "Đang đợi";
            const TimeCreate = data.currentDate;
            
            await axios.post('http://localhost/WebApp/Server/index.php/order?add=true',{
                ClientID: ClientID,
                Address: Address,
                PayType: PayType,
                OrderFee: OrderFee,
                OrderState: OrderState,
                OrderShip: OrderShip,
                TimeCreate: TimeCreate,
            })
            toast.success(`Đơn hàng đã được tạo thành công`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
        catch(err){
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

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        order: [],
        product: [] ,
        detail: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: (buider) => {
        (buider)
            .addCase(fetchOrder.pending, (state, action) => {
                state.loader = true
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.loader = false
                state.order = action.payload
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.order = false
            })
            .addCase(filterOrder.pending, (state, action) => {
                state.loader = true
            })
            .addCase(filterOrder.fulfilled, (state, action) => {
                state.loader = false
                state.order = action.payload
            })
            .addCase(filterOrder.rejected, (state, action) => {
                state.order = false
            })
            .addCase(searchOrder.pending, (state, action) => {
                state.loader = true
            })
            .addCase(searchOrder.fulfilled, (state, action) => {
                state.loader = false
                state.order = action.payload
            })
            .addCase(searchOrder.rejected, (state, action) => {
                state.order = false
            })
            .addCase(orderDetail.pending, (state, action) => {
                state.loader = true
            })
            .addCase(orderDetail.fulfilled, (state, action) => {
                state.loader = false
                state.product = action.payload
            })
            .addCase(orderDetail.rejected, (state, action) => {
                state.order = false
            })
            .addCase(orderSpecs.pending, (state, action) => {
                state.loader = true
            })
            .addCase(orderSpecs.fulfilled, (state, action) => {
                state.loader = false
                state.detail = action.payload[0]
            })
            .addCase(orderSpecs.rejected, (state, action) => {
                state.order = false
            })
            .addCase(updateStatus.pending, (state, action) => {
                state.loader = true
            })
            .addCase(updateStatus.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(updateStatus.rejected, (state, action) => {
                state.order = false
            })
            .addCase(addOrder.pending, (state, action) => {
                state.loader = true
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(addOrder.rejected, (state, action) => {
                state.order = false
            })
            
    }
}
)


export default orderSlice.reducer
