import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs } from "./allJobsThunks";
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
    stats: {},
    monthlyApplications: [],
    ...initialFiltersState,
  }; 

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllJobs.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.jobs = payload;
            })
            .addCase(getAllJobs.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
    }
});

export default allJobsSlice.reducer;