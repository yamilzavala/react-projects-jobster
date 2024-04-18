import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs, showStats } from "./allJobsThunks";
import { toast } from 'react-toastify';

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
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    //stats: {},
    stats: {pending: 20, interview: 25, declined: 22},
    //monthlyApplications: [],
    monthlyApplications: [
        {
            "date": "Mar 2022",
            "count": 8
        },
        {
            "date": "Apr 2022",
            "count": 6
        },
        {
            "date": "May 2022",
            "count": 4
        },
        {
            "date": "Jun 2022",
            "count": 5
        },
        {
            "date": "Jul 2022",
            "count": 6
        },
        {
            "date": "Aug 2022",
            "count": 5
        }
    ],
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
export const {showLoading, hideLoading} = allJobsSlice.actions;
export default allJobsSlice.reducer;