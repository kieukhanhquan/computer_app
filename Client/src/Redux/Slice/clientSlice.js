import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const loginClient = createAsyncThunk(
    "loginClient",
    async (data, { dispatch }) => {
        try {
            let response = await axios.get(`http://localhost/WebApp/Server/index.php/auth?UserName=${data.UserName}&Password=${data.Password}&Type=2000000`)
            sessionStorage.setItem("checker", data.UserName);
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
                Type: 2000000,
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
                Type: 2000000,
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

export const registerClient = createAsyncThunk(
    "registerClient",
    async (data, { dispatch }) => {
        try {
            await axios.post('http://localhost/WebApp/Server/index.php/auth', {
                FullName: data.FullName,
                UserName: data.UserName,
                Password: data.Password,
                PhoneNumber: data.PhoneNumber,
                Confirm: data.Confirm,
                DateOfBirth: "", 
                Avatar: "",
                Type: 2000000
            }).then((res)=>{console.log(res)})
            dispatch(setRegister(true))
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)


const clientSlice = createSlice({
    name: "clientSlice",
    initialState: {
        clientInfor: null,
        userName: null,
        register: null,
        loading: false
    },
    reducers: {
        setClient: (state) => {
            state.clientInfor = null
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
            .addCase(loginClient.pending, (state, action) => {
                state.loading = true
            })
            .addCase(loginClient.fulfilled, (state, action) => {
                state.loading = false
                state.clientInfor = action.payload[0]
            })
            .addCase(loginClient.rejected, (state, action) => {
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
            .addCase(registerClient.pending, (state, action) => {
                state.loading = true
            })
            .addCase(registerClient.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(registerClient.rejected, (state, action) => {
                state.loading = false
            })
            
    }
})

export const { setClient, setUserName, setRegister } = clientSlice.actions
export default clientSlice.reducer