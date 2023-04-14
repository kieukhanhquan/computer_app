import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk(
    "fetchUser",
    async (data, { dispatch }) => {
        try {
            const response = await axios.get("http://localhost/WebApp/Server/index.php/clients")
            return response.data
        }
        catch (err) {
            console.log("err:", err)
        }
    }
)

export const updateStatus = createAsyncThunk(
    "updateStatus",
    async (data, { dispatch }) => {
        try {

            await axios.put("http://localhost/WebApp/Server/index.php/clients", {
                ID: data.ID,
                Status: data.Status
            })
            dispatch(fetchUser(0))
        }
        catch (err) {
            console.log("err:", err)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: (buider) => {
        (buider)
            .addCase(fetchUser.pending, (state, action) => {
                state.loader = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loader = false
                state.users = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loader = false
            })
            .addCase(updateStatus.pending, (state, action) => {
                state.loader = true
            })
            .addCase(updateStatus.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(updateStatus.rejected, (state, action) => {
                state.loader = false
            })
    }
}
)


export default userSlice.reducer