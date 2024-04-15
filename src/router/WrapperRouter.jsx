import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Error, Landing, ProtectedRoute, Register } from '../pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout, Stats, Profile, AddJob, AllJobs } from '../pages/dashboard';

const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*start dashboard routes */}
                <Route path='/' element={
                    <ProtectedRoute target='landing'>
                        <SharedLayout/>
                    </ProtectedRoute>
                }>
                    {/*SharedLayout (dashboard) nested routes */}
                    <Route index element={<Stats/>}/>
                    <Route path='add-job' element={<AddJob/>}/>
                    <Route path='all-jobs' element={<AllJobs/>}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
                {/*end dashboard routes */}
                <Route path='landing' element={<Landing/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <ToastContainer position='bottom-center'/>
        </BrowserRouter>
    );
};

const WrapperRouter =  ({children}) => {
    return (
        <RoutesList>
            {children}
        </RoutesList>
    )
}

export default WrapperRouter;