import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { registerUser, loginUser, updateUser } from './userThunks';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../../utils/localStorage';

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: 
    getUserFromLocalStorage(),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {        
        //toggle sidebar
        togglesSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        //logout
        logoutUser: (state) => {
            state.user = null;
            state.isSidebarOpen = false;
            toast.success('Logout Successful!');
            removeUserFromLocalStorage();
        }
    },
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
            //update user
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const {user} = action.payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user)
                toast.success(`user updated`);
            })
            .addCase(updateUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
    }
})
export const {logoutUser, togglesSidebar} = userSlice.actions;
export default userSlice.reducer;