import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import { onError } from "../lib/errorLib";
import { useAppContext } from "../lib/contextLib";
import { useFormFields } from "../lib/hooksLib";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const nav = useNavigate();
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
      });
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            nav("/")
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <LoaderButton
                    block="true"
                    size="lg"
                    type="submit"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Login
                </LoaderButton>
            </Form>
        </div>
    );
}