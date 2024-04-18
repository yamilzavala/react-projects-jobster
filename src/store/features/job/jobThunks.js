import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";
import { hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { getAllJobs } from "../allJobs/allJobsThunks";
import { authHeader } from "../../../utils/authHeader";

export const addJob = createAsyncThunk(
    'job/addJob',
    async (job ,thunkAPI) => {
        try {
            const resp = await customFetch.post('/jobs',job, {headers: authHeader(thunkAPI)})
            //const resp = await customFetch.post('/jobs',job)
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

export const deleteJob = createAsyncThunk(
    'job/deleteJob',
    async (jobId, thunkAPI) => {
        thunkAPI.dispatch(showLoading())
        try {
            const resp = await customFetch.delete(`/jobs/${jobId}`, {headers: authHeader(thunkAPI)})
            thunkAPI.dispatch(getAllJobs());
            return resp?.data
        } catch (error) {
            thunkAPI.dispatch(hideLoading())
            return thunkAPI.rejectWithValue(error.responde.data.msg)
        }
    }
)

export const editJob = createAsyncThunk(
    'job/editJob', 
    async ({jobId, job}, thunkAPI) => {
        try {
            const resp = await customFetch.patch(`/jobs/${jobId}`, job, {headers: authHeader(thunkAPI)})
            thunkAPI.dispatch(clearValues())
            return resp?.data?.msg
        } catch (error) {
            return thunkAPI.rejectWithValue(error.responde.data.msg)
        }
    }
)


