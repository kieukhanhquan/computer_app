import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


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

const orderSlice = createSlice({
    name: 'userSlice',
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
    }
}
)


export default orderSlice.reducer
