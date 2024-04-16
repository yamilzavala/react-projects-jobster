import { createSlice } from "@reduxjs/toolkit";
import { addJob } from "./jobThunks";
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from "../../../utils/localStorage";

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

const jobSlice = createSlice({
    name: 'job',
    initialState,
    //actions reducers
    reducers: {
        handleChange: (state, {payload: {name, value}}) => {
            state[name] = value
        },
        clearValues: () => {      
            return {
                ...initialState,
                location: getUserFromLocalStorage()?.location || ''
            }
        },
    },
    extraReducers: (builder) => {
        //add job
        builder
            .addCase(addJob.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addJob.fulfilled, (state) => {
                state.isLoading = false;
                toast.success('Job created!');
            })
            .addCase(addJob.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
    }
})

export const {handleChange, clearValues} = jobSlice.actions;
export default jobSlice.reducer;