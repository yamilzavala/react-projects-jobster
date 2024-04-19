import { createAsyncThunk } from '@reduxjs/toolkit'
import customFetch, { checkForUnauthorizedResponse } from '../../../utils/axios'
import { authHeader } from '../../../utils/authHeader';
import { logoutUser } from './userSlice';
import { clearAllJobsState, resetFilters } from '../allJobs/allJobsSlice';

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
            const resp = await customFetch.patch('/auth/updateUser', user, {headers: authHeader(thunkAPI)})
            return resp.data
        } catch (error) {       
           return checkForUnauthorizedResponse(error, thunkAPI)
        }
    }
)

export const clearStoreThunk = createAsyncThunk(
    'user/clearStore',
    async (message, thunkAPI) => {
        try {
            thunkAPI.dispatch(logoutUser(message))
            thunkAPI.dispatch(clearAllJobsState())
            thunkAPI.dispatch(resetFilters())
            return Promise.resolve()
        } catch (error) {                 
            return Promise.reject()
        }
    }
)