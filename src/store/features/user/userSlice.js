import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { registerUser, loginUser } from './userThunks';
import { addUserToLocalStorage, getUserFromLocalStorage } from '../../../utils/localStorage';

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            //register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled,(state, {payload}) => {
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user)
                toast.success(`Hello There ${user.name}`);
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
            //login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const {payload} = action;
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user)
                toast.success(`Welcome back ${user.name}`);
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
            //logout
    }
})

export default userSlice.reducer;