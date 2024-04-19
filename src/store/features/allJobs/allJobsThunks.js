import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios";
import { authHeader } from "../../../utils/authHeader";

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs', async (_, thunkAPI) => {
        const {search, searchStatus, searchType, sort, page} = thunkAPI.getState().allJobsState;        
        //let url = `/jobs/?status=${searchStatus}&searchType=${searchType}&sort=${sort}&page=${page}`
        
        let paramsData = {
            status: searchStatus, 
            jobType: searchType, 
            sort, 
            page
        }

        if(search) {
            paramsData = {...paramsData, search};
            //url = url + `&search=${search}`
        }
        console.log(paramsData)

        try {
            const resp = await customFetch.get('/jobs', {params: paramsData, headers: authHeader(thunkAPI)})
            //const resp = await customFetch.get(url, {headers: authHeader(thunkAPI)})
            return resp.data;
        } catch (error) {
            return checkForUnauthorizedResponse(error, thunkAPI)
        }
    }
)

export const showStats = createAsyncThunk(
    'allJobs/showStats', async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/jobs/stats', {headers: authHeader(thunkAPI)})
            return resp.data;
        } catch (error) {
            return checkForUnauthorizedResponse(error, thunkAPI)
        }
    }
)