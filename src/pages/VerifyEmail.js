import { Form, Button } from "react-bootstrap";

const VerifyEmail = () => {
    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow">
            <h1 className="mb-3 font-bold">Verify Email</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Email" disabled />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button
             className="d-block w-100 mt-4" variant="dark" type="submit">
                Verify Email
            </Button>
        </Form>
    )
}

export default VerifyEmail;