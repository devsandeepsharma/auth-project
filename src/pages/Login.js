import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow" onSubmit={handleFormSubmit}>
            <h1 className="mb-3 font-bold">Welcome Back 👋</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Your Password" />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button className="d-block w-100 mt-4" variant="dark" type="submit">
                Login
            </Button>
            <p className="text-center mt-3">Create New Account <Link to="/signup">Signup</Link></p>
        </Form>
    )
}

export default Login;