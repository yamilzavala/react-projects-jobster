import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEditing: false,
    editJobId: '',
};

const jobcreateSlice = createSlice({
    name: 'job',
    initialState,
})

export default jobcreateSlice.reducer;