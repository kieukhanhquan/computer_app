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
            alert(err.response.data)
        }
    }
)

export const updateStatus = createAsyncThunk(
    "updateStatus",
    async (data, { dispatch }) => {
        try {

            await axios.put("http://localhost/WebApp/Server/index.php/clients", {
                ID: data.ID,
                Status: data.Status,
                type: 0
            })
            dispatch(fetchUser(0))
        }
        catch (err) {
            console.log("CÓ lỗi")
            console.log("err: ", err)
        }
    }
)

export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { dispatch }) => {
        try {

            await axios.put("http://localhost/WebApp/Server/index.php/clients", {
                ID: data.ID,
                FirstName: data.FirstName,
                LastName: data.LastName,
                DayOfBirth: data.DayOfBirth,
                PhoneNumber: data.PhoneNumber,
                Email: data.Email,
                Avatar: data.Avatar,
                type: 1
            })
            dispatch(fetchUser(0))
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const searchData = createAsyncThunk(
    "searchData",
    async (data, { dispatch }) => {
        try {
            const response = await axios.get(`http://localhost/WebApp/Server/index.php/clients?search=${data}`)
            return response.data
        }
        catch (err) {
            console.log("err: ", err)
        }
    }
)

export const sortData = createAsyncThunk(
    "sortData",
    async (data, { dispatch }) => {
        try {
            const response = await axios.get(`http://localhost/WebApp/Server/index.php/clients?sort=${data}`)
            return response.data
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)


export const addUser = createAsyncThunk(
    "addUser",
    async (data, { dispatch }) => {
        try {
            await axios.post("http://localhost/WebApp/Server/index.php/clients", {
                UserName: data.UserName,
                Password: data.Password,
                FirstName: data.FirstName,
                LastName: data.LastName,
                DayOfBirth: data.DayOfBirth,
                PhoneNumber: data.PhoneNumber,
                Email: data.Email,
                Avatar: data.Avatar
            })
            dispatch(fetchUser(0))
        }
        catch (err) {
            alert(err.response.data)
        }
    }
)

export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (data, { dispatch }) => {
        try {
            await axios.delete("http://localhost/WebApp/Server/index.php/clients", {
                data: {ID: data.ID}
            })
            dispatch(fetchUser(0))
        }
        catch (err) {
            alert(err.response.data)
        }
    }

)

export const updateGrade  = createAsyncThunk(
    "updateGrade",
        async (data, { dispatch }) => {
            try {
                await axios.put("http://localhost/WebApp/Server/index.php/clients", data)
            }
            catch (err) {
                alert(err.response.data)
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
            .addCase(addUser.pending, (state, action) => {
                state.loader = true
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loader = false
            })
            .addCase(searchData.pending, (state, action) => {
                state.loader = true
            })
            .addCase(searchData.fulfilled, (state, action) => {
                state.loader = false
                state.users = action.payload
            })
            .addCase(searchData.rejected, (state, action) => {
                state.loader = false
            })
            .addCase(sortData.pending, (state, action) => {
                state.loader = true
            })
            .addCase(sortData.fulfilled, (state, action) => {
                state.loader = false
                state.users = action.payload
            })
            .addCase(sortData.rejected, (state, action) => {
                state.loader = false
            })
            .addCase(updateUser.pending, (state, action) => {
                state.loader = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loader = false
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.loader = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loader = false
            })
            .addCase(updateGrade.pending, (state, action) => {
                state.loader = true
            })
            .addCase(updateGrade.fulfilled, (state, action) => {
                state.loader = false
            })
            .addCase(updateGrade.rejected, (state, action) => {
                state.loader = false
            })
    }
}
)


export default userSlice.reducer