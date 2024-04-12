import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../../utils/axios'
import { toast } from 'react-toastify';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        //console.log(`Login User : ${JSON.stringify(user)}`)
        try {
            const resp = await customFetch.post('/auth/login', user)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register',user)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const registerTestingUser = createAsyncThunk(
    'user/registerTestingUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/testingRegister', user);
            console.log(resp)
        } catch (error) {
            toast.error(error.response.data.msg)
        }        
    }
)