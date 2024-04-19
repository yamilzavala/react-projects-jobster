import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios";
import { clearValues } from "./jobSlice";
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
            return checkForUnauthorizedResponse(error, thunkAPI)
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
            return checkForUnauthorizedResponse(error, thunkAPI)
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
            return checkForUnauthorizedResponse(error, thunkAPI)            
        }
    }
)


