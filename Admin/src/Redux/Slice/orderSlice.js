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
            console.log(data)
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


const orderSlice = createSlice({
    name: 'userSlice',
    initialState: {
        order: [],
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
    }
}
)


export default orderSlice.reducer
