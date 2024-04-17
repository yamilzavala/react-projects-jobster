import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../../utils/axios'
import { authHeader } from '../../../utils/authHeader';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
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
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }        
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.patch('/auth/updateUser', user)
            return resp.data
        } catch (error) {       
            if(error.response.status === 401) {
                return thunkAPI.rejectWithValue('Unauthorized! Loggin out...');
            }      
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)