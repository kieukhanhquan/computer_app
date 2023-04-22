import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getRevenue = createAsyncThunk(
    "getRevenue",
    async (data, { dispatch }) => {
        try {
            let response = await axios.get(`http://localhost/WebApp/Server/index.php/statistic?revenue=${data.year}`)
            dispatch(updateMonth(response.data))
            return response.data
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)

export const getProduct = createAsyncThunk(
    "getProduct",
    async (data, { dispatch }) => {
        try {
            console.log(data.year)
            let response = await axios.get(`http://localhost/WebApp/Server/index.php/statistic?product=${data.year}`)
            dispatch(updateProduct(response.data))
            return response.data
        }
        catch (err) {
            console.log("err")
            alert(err.response.data)
        }
    }
)


const statisslice = createSlice({
    name: "statisslice",
    initialState: {
        monthLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        monthValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        typeLabel: ["Máy tính", "Phụ kiện", "Điện thoại"],
        typeValue: [0, 0, 0],
        loading: false
    },
    reducers: {
        updateMonth: (state, action) => {
            let data = action.payload
            let i = 0
            let j = 0
            let lenValue = data.length
            let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            for (i = 0; i < lenValue; i++) {
                let index = parseInt(data[i].Monthly)
                temp[index - 1] = parseInt(data[i].OrderFee) + parseInt(data[i].OrderShip)
            }
            state.monthValue = temp
        },
        updateProduct: (state, action) => {
            let data = action.payload
            let lenValue = data.length
            let temp = [0, 0, 0]
            let i = 0
            let j = 0
            let tempType = state.typeLabel
            if (lenValue > 0) {
                for (i = 0; i < 3; i++) {
                    if (tempType[i] == data[j].Type) {
                        temp[i] = parseInt(data[j].Quantity)
                        j += 1
                    }
                    if (j >= lenValue) {
                        break
                    }
                }
            }
            state.typeValue = temp
        }
    },
    extraReducers: (buider) => {
        (buider)
            .addCase(getRevenue.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getRevenue.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getRevenue.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(getProduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const { updateMonth, updateProduct } = statisslice.actions

export default statisslice.reducer