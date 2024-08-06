import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Character from "./info/Character";
import NotFound from "./NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/info' element={<Character />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;