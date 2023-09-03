import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Notice from '../Pages/Notice';

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notice />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
