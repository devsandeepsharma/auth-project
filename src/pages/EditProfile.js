import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import AuthContext from "../store/AuthContext";
import { AuthService } from "../services/Authentication";

const EditProfile = () => {

    const { user, addUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError({});

        if(fullName === "" && photoURL === "") {
            setError({
                fullName: "Please Write your name",
                photoURL: "atleast change your photo"
            })

            setLoading(false);
            return;
        }

        updateProfile();
    }

    const updateProfile = async () => {
        try {
            const name = fullName || user?.displayName || "";
            const photo = photoURL || user?.photoURL || "";

            await AuthService.updateUserProfile(name, photo);

            const freshUser = AuthService.getCurrentUser();
            const freshUserData = {
                email: freshUser.email,
                emailVerified: freshUser.emailVerified,
                displayName: freshUser.displayName,
                photoURL: freshUser.photoURL,
                uid: freshUser.uid
            }

            addUser(freshUserData);
            localStorage.setItem("user", JSON.stringify(freshUserData));
            navigate("/");
        } catch (error) {
            console.log(error)
            setError({
                fullName: "Something went wrong",
                photoURL: "Something went wrong"
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow" onSubmit={handleFormSubmit}>
            <h1 className="mb-3 font-bold">Edit Profile</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder={user?.displayName}
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                />
                <Form.Text className="text-danger">
                    {error?.fullName && error.fullName}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder={user?.photoURL}
                    value={photoURL} 
                    onChange={(e) => setPhotoURL(e.target.value)}
                />
                <Form.Text className="text-danger">
                    {error?.photoURL && error.photoURL}
                </Form.Text>
            </Form.Group>
            <Button
             className="d-block w-100 mt-4" variant="dark" type="submit"
                disabled={loading}
             >
                {loading ? "Updating...": "Update Profile"}
            </Button>
        </Form>
    )
}

export default EditProfile;