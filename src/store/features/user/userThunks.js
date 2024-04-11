import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        console.log(`Login User : ${JSON.stringify(user)}`)
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        console.log(`Register User : ${JSON.stringify(user)}`)
    }
)