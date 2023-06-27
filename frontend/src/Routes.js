import React from "react";
import ChangeEmail from "./containers/ChangeEmail";
import ChangePassword from "./containers/ChangePassword";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import { Route, Routes } from "react-router-dom";
import Settings from "./containers/Settings";
import Signup from "./containers/Signup";

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {
                /* Finally, catch all unmatched routes */
            }
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notes/new" element={<NewNote />} />
            <Route path="/notes/:id" element={<Notes />} />
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
            <Route
                path="/settings/email"
                element={
                    // <AuthenticatedRoute> // błąd: "nie zdefiniowane" - wydaje mi się, ze nie musi go byc, bo bez niego jest w porządku
                        <ChangeEmail />
                    // </AuthenticatedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />;
        </Routes>

    );
}