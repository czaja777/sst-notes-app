import React from "react";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
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
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {
                /* Finally, catch all unmatched routes */
            }
            <Route path="/login" element={
                <UnauthenticatedRoute>
                    <Login />
                </UnauthenticatedRoute>
            } />
            <Route path="/signup" element={
                <UnauthenticatedRoute>
                    <Signup />
                </UnauthenticatedRoute>
            } />
            <Route path="/settings" element={
                <AuthenticatedRoute>
                    <Settings />
                </AuthenticatedRoute>
            } />
            <Route path="/notes/new" element={
                <AuthenticatedRoute>
                    <NewNote />
                </AuthenticatedRoute>
            } />
            <Route path="/notes/:id" element={
                <AuthenticatedRoute>
                    <Notes />
                </AuthenticatedRoute>
            } />
            <Route
                path="/login/reset"
                element={
                    <UnauthenticatedRoute>
                        <ResetPassword />
                    </UnauthenticatedRoute>
                }
            />
            <Route
                path="/settings/password"
                element={
                    <AuthenticatedRoute>
                        <ChangePassword />
                    </AuthenticatedRoute>
                }
            />
            <Route
                path="/settings/email"
                element={
                    <AuthenticatedRoute>
                        <ChangeEmail />
                    </AuthenticatedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />;
        </Routes>

    );
}