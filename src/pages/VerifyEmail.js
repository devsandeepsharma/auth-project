import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import AuthContext from "../store/AuthContext";
import { AuthService } from "../services/Authentication";

const VerifyEmail = () => {

    const navigate = useNavigate();
    const { user, addUser } = useContext(AuthContext);

    const [mailSent, setMailSent] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            await AuthService.sendVerification();
            setMailSent(true);
        } catch (error) {
            setError("Something went wrong")
        } finally {
            setLoading(false);
        }
    }

    const updateData = async () => {
        const freshUser = AuthService.getCurrentUser();
        try {
            if(freshUser.emailVerified) {
                await freshUser.reload();
                const freshUserData = {
                    email: freshUser.email,
                    emailVerified: freshUser.emailVerified,
                    displayName: freshUser.displayName,
                    photoURL: freshUser.photoURL,
                    uid: freshUser.uid
                }

                addUser(freshUserData);
                localStorage.setItem("user", JSON.stringify(freshUserData));
                setMailSent(false);
                navigate("/");
            }
        } catch (error) {
            setError(error.code);
        }
    }

    return (
        <Form style={{maxWidth: "500px",}} className="p-4 m-auto mt-4 rounded shadow" onSubmit={handleFormSubmit}>
            <h1 className="mb-3 font-bold">Verify Email</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder={user?.email} disabled />
                <Form.Text className="text-danger">
                    {error && error}
                </Form.Text>
            </Form.Group>
            <Button
             className="d-block w-100 mt-4" variant="dark" type="submit"
                disabled={user?.emailVerified}
             >
                {
                    user?.emailVerified ? (
                        "You are already verified"
                    ) : (
                        loading ? (
                            "Sending mail..."
                        ) : mailSent ? "Re-send mail": "Verify Email"
                    )
                }
            </Button>
            {
                mailSent && (
                    <div className="text-center mt-4">
                        <p>📧 We've sent you a verification email. Please check your inbox.</p>
                        <p>✅ Once you've verified, click the button below to continue.</p>
                        <Button variant="dark" onClick={updateData}>
                            I have verified
                        </Button>
                    </div>
                )
            }
        </Form>
    )
}

export default VerifyEmail;