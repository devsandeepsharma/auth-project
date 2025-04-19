import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import formValidate from "../utils/formValidate";
import { AuthService } from "../services/Authentication";

const Signup = () => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        setErrors({});
        setLoading(true);
        e.preventDefault();
        const getErrors = formValidate("signup",fullName, email, password);
        if(getErrors) {
            setErrors(getErrors);
            setLoading(false);
            return;
        }

        createUser(email, password, fullName);
    }

    const createUser = async (email, password, fullName) => {
        try {
            const dummyImg = "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww";
            await AuthService.signup(email, password);
            await AuthService.updateUserProfile(fullName, dummyImg);
            
            navigate("/login");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setErrors({ email: "This email is already in use" });
            } else {
                setErrors(
                    { 
                        fullName: "Something went wrong. Please try again." ,
                        email: "Something went wrong. Please try again." ,
                        password: "Something went wrong. Please try again." ,
                    }
                );
            }
        } finally {
            setLoading(false);
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
            <Button className="d-block w-100 mt-4" variant="dark" type="submit"
                disabled={loading}
            >
                {loading ? "Signing in": "Signup"}
            </Button>
            <p className="text-center mt-3">Already have an Account <Link to="/login">Login</Link></p>
        </Form>
    )
}

export default Signup;