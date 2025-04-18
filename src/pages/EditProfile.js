import { Button, Form } from "react-bootstrap";

const EditProfile = () => {
    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow">
            <h1 className="mb-3 font-bold">Edit Profile</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" placeholder="Paste Your Photo URL Here" />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button
             className="d-block w-100 mt-4" variant="dark" type="submit">
                Update Profile
            </Button>
        </Form>
    )
}

export default EditProfile;