import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Expense-Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/expense">Expesnes</Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contactus">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} as={NavLink} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;