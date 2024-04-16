import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";

export const addJob = createAsyncThunk(
    'job/addJob',
    async (job ,thunkAPI) => {
        try {
            const resp = await customFetch.post('/jobs',job, {
                headers: { 
                    Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`
                }
            })
            thunkAPI.dispatch(clearValues())
            return resp.data
        } catch (error) {
            if(error.responde.status === 401) {
                thunkAPI.dispatch(logoutUser())
                return thunkAPI.rejectWithValue('Unauthorized! Logging out...')
            }
            return thunkAPI.rejectWithValue(error.responde.data.msg)
        }
    }
) 


