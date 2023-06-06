import React from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import { Route, Routes } from "react-router-dom";

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {
                /* Finally, catch all unmatched routes */
            }
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />;
        </Routes>

    );
}