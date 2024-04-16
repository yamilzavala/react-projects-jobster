import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios";

export const getAllJobs = createAsyncThunk(
    'job/allJobs', async (thunkAPI) => {
        try {
            const resp = await customFetch.get('/jobs', {
                headers: {
                    Authorization: 'Bearer ' + thunkAPI.getState().userState.user.token
                }
            })
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.responde.data.msg)
        }
    }
)