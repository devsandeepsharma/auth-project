import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import formValidate from "../utils/formValidate";

const Signup = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setErrors] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const getErrors = formValidate("signup",fullName, email, password);
        if(getErrors) {
            setErrors(getErrors);
        }
    }

    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow" onSubmit={handleFormSubmit}>
            <h1 className="mb-3 font-bold">Create new account</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Your Name" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                />
                <Form.Text className="text-danger">
                    {error?.fullName && error.fullName}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-danger">
                    {error?.email && error.email}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter Your Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-danger">
                    {error?.password && error.password}
                </Form.Text>
            </Form.Group>
            <Button className="d-block w-100 mt-4" variant="dark" type="submit">
                Signup
            </Button>
            <p className="text-center mt-3">Already have an Account <Link to="/login">Login</Link></p>
        </Form>
    )
}

export default Signup;