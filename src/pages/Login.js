import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import formValidate from "../utils/formValidate";
import { AuthService } from "../services/Authentication";
import AuthContext from "../store/AuthContext";

const Login = () => {

    const navigate = useNavigate();
    const { addToken, addUser } = useContext(AuthContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        const getErrors = formValidate("login", "", email, password);
        if(getErrors) {
            setErrors(getErrors);
            setLoading(false);
            return;
        }

        loginUser(email, password);
    }

    const loginUser = async (email, password) => {
        try {
            const user = await AuthService.login(email, password);
            const token = user.user.accessToken;
            const userData = {
                email: user.user.email,
                emailVerified: user.user.emailVerified,
                displayName: user.user.displayName,
                photoURL: user.user.photoURL,
                uid: user.user.uid
            }

            addToken(token);
            addUser(userData);
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/");
        } catch (error) {
            setErrors({
                email: "Invalid email and password",
                password: "Invalid email and password",
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow" onSubmit={handleFormSubmit}>
            <h1 className="mb-3 font-bold">Welcome Back 👋</h1>
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
                {loading ? "Logging in": "Login"}
            </Button>
            <p className="text-center mt-3">Create New Account <Link to="/signup">Signup</Link></p>
        </Form>
    )
}

export default Login;