import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs, showStats } from "./allJobsThunks";
import { toast } from 'react-toastify';
import { jobsMock, monthlyApplicationsMock, statsMock } from "../../../mocks/mocks";

const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  };

  const initialState = {
    isLoading: false,
    jobs: [], 
    //jobs: jobsMock,  
    totalJobs: 0,
    numOfPages: 0,
    page: 1,
    stats: {},
    //stats: statsMock,
    monthlyApplications: [], 
    //monthlyApplications: monthlyApplicationsMock,  
    ...initialFiltersState,
  }; 

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true
        },
        hideLoading: (state) => {
            state.isLoading = false
        },
        handleChange: (state, {payload: {name, value}}) => {
            state.page = 1;
            state[name] = value;
        },
        handlePage: (state, {payload: {page}}) => {
            state.page = page
        },
        resetFilters: (state) => {
            return {...state, ...initialFiltersState}
        },
        clearAllJobsState: (state) => initialState,
    },
    extraReducers: (builder) => {
        //get all jobs
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllJobs.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.jobs = payload.jobs;
                state.numOfPages = payload.numOfPages;
                state.totalJobs = payload.totalJobs;
            })
            .addCase(getAllJobs.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
            //show stats
            .addCase(showStats.pending, (state) => {
                state.isLoading = true
            })
            .addCase(showStats.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.stats = payload.defaultStats;
                state.monthlyApplications = payload.monthlyApplications;
            })
            .addCase(showStats.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
    }
});
export const {showLoading, hideLoading, handleChange, resetFilters, handlePage, clearAllJobsState} = allJobsSlice.actions;
export default allJobsSlice.reducer;