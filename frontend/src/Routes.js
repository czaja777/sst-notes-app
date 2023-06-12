import React from "react";
import ChangePassword from "./containers/ChangePassword";
import Home from "./containers/Home";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
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
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/login/reset"
                element={
                    // <UnauthenticatedRoute> // błąd: "nie zdefiniowane" - wydaje mi się, ze nie musi go byc, bo bez niego jest w porządku
                    <ResetPassword />
                    // </UnauthenticatedRoute>
                }
            />
            <Route
                path="/settings/password"
                element={
                    // <AuthenticatedRoute> // błąd: "nie zdefiniowane" - wydaje mi się, ze nie musi go byc, bo bez niego jest w porządku
                        <ChangePassword />
                    // </AuthenticatedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />;
        </Routes>

    );
}