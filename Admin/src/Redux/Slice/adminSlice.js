import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const loginAdmin = createAsyncThunk(
    "loginAdmin",
    async (data, { dispatch }) => {
        try {
            let response = await axios.get(`http://localhost/WebApp/Server/index.php/auth?UserName=${data.UserName}&Password=${data.Password}&Type=1000000`)
            return response.data
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)

export const validInfo = createAsyncThunk(
    "validInfo",
    async (data, { dispatch }) => {
        try {
            await axios.put('http://localhost/WebApp/Server/index.php/auth', {
                UserName: data.UserName,
                PhoneNumber: data.PhoneNumber,
                Type: 1000000,
                Step: 1
            })
            dispatch(setUserName(data.UserName))
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)

export const resetPassword = createAsyncThunk(
    "resetPassword",
    async (data, { dispatch }) => {
        try {
            await axios.put('http://localhost/WebApp/Server/index.php/auth', {
                UserName: data.UserName,
                Password: data.Password,
                Confirm: data.Confirm,
                Type: 1000000,
                Step: 2
            })
            dispatch(setUserName(null))
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)

export const registerAdmin = createAsyncThunk(
    "registerAdmin",
    async (data, { dispatch }) => {
        try {
            await axios.post('http://localhost/WebApp/Server/index.php/auth', {
                FullName: data.FullName,
                UserName: data.UserName,
                Password: data.Password,
                PhoneNumber: data.PhoneNumber,
                Confirm: data.Confirm,
                Type: 1000000
            })
            dispatch(setRegister(true))
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)


const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {
        adminInfo: null,
        userName: null,
        register: null,
        loading: false
    },
    reducers: {
        setAdmin: (state) => {
            state.adminInfo = null
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setRegister: (state, action) => {
            state.register = action.payload
        }

    },
    extraReducers: (buider) => {
        (buider)
            .addCase(loginAdmin.pending, (state, action) => {
                state.loading = true
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false
                state.adminInfo = action.payload[0]
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(validInfo.pending, (state, action) => {
                state.loading = true
            })
            .addCase(validInfo.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(validInfo.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(resetPassword.pending, (state, action) => {
                state.loading = true
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(registerAdmin.pending, (state, action) => {
                state.loading = true
            })
            .addCase(registerAdmin.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(registerAdmin.rejected, (state, action) => {
                state.loading = false
            })
            
    }
})

export const { setAdmin, setUserName, setRegister } = adminSlice.actions
export default adminSlice.reducer