import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../store/AuthContext";

const Header = () => {

    const { token } = useContext(AuthContext);

    return (
        <>
            <Navbar className="py-2" expand="md" bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Auth Layout</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="ml-auto" id="navbarScroll">
                        <Nav
                            className="ms-auto d-flex align-md-items-center gap-md-3"
                            navbarScroll
                        >
                            {
                                token ? (
                                        <>
                                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                            <Nav.Link as={NavLink} to="/verify">Verify Email</Nav.Link>
                                            <Nav.Link as={NavLink} to="/edit">Edit Profile</Nav.Link>
                                            <Button 
                                                variant="light py-1 px-3 mt-2 mt-md-0" 
                                            >
                                                Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                            <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
                                        </>
                                    )

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;