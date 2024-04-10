import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Dashboard, Error, Landing, Register } from '../pages';

const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/landing' element={<Landing/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
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