import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getInfor = createAsyncThunk(
    "getInfo",
    async(data, { dispatch }) => {
        try {
            let response = await axios.get(`http://localhost/WebApp/Server/index.php/admin?ID=${data.ID}`)
            localStorage.setItem('admin', JSON.stringify(response.data));
            return response.data
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)

export const updateInfor = createAsyncThunk(
    "updateInfor",
    async(data, { dispatch }) => {
        try {
            await axios.put("http://localhost/WebApp/Server/index.php/admin", {
                ID: data.ID, 
                FirstName: data.FirstName,
                LastName: data.LastName,
                PhoneNumber: data.PhoneNumber,
                Avatar: data.Avatar
            })
            dispatch(getInfor(data))
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)

const inforlice = createSlice({
    name: "inforSlice",
    initialState: {
        adminInfo: JSON.parse(localStorage.getItem('admin')),
        loading: false
    },
    reducers: {
    },
    extraReducers: (buider) => {
        (buider)
            .addCase(getInfor.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getInfor.fulfilled, (state, action) => {
                state.loading = false
                state.adminInfo = action.payload[0]
            })   
            .addCase(getInfor.rejected, (state, action) => {
                state.loading = false
            })    
            .addCase(updateInfor.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateInfor.fulfilled, (state, action) => {
                state.loading = false
            })   
            .addCase(updateInfor.rejected, (state, action) => {
                state.loading = false
            })          
    }
})

export default inforlice.reducer