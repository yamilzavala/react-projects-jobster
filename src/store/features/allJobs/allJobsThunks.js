import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios";
import { authHeader } from "../../../utils/authHeader";

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs', async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/jobs', {headers: authHeader(thunkAPI)})
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.responde.data.msg)
        }
    }
)

export const showStats = createAsyncThunk(
    'allJobs/showStats', async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/jobs/stats', {headers: authHeader(thunkAPI)})
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.responde.data.msg)
        }
    }
)