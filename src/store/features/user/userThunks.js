import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../../utils/axios'

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        //console.log(`Login User : ${JSON.stringify(user)}`)
        try {
            const resp = await customFetch.post('/auth/login', user)
            return resp.data;
        } catch (error) {
            console.log(error)
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
            console.log('register error: ', error)
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
            console.log(error.response.data.msg)
        }        
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.patch('/auth/updateUser', user, {
                headers : {
                    Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`
                }
            })
            return resp.data
        } catch (error) {       
            if(error.response.status === 401) {
                return thunkAPI.rejectWithValue('Unauthorized! Loggin out...');
            }      
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)