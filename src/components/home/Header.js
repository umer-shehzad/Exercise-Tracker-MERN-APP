import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const auth = localStorage.getItem('user-login');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/Login");
    }
    const fontStyle = {
        fontSize:'19px'
    }

    return (
        <div>
            <header>
                <div>
                    <Navbar bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Brand>
                                <img
                                    alt="logo"
                                    src="/images/logo.jpg"
                                    width="50px"
                                    height="50px"
                                    style={{
                                        borderRadius:50,
                                        marginRight:'10px'
                                    }}
                                    className="d-inline-block align-center"
                                />{' '}
                                Exercise Tracker App
                            </Navbar.Brand>
                            {
                                auth
                                    ? <>
                                        <Navbar.Collapse className="justify-content-end" style={fontStyle}>
                                            <Nav>
                                                <Nav.Link href='/Profile' >Profile</Nav.Link>
                                                <Nav.Link onClick={logout} href='/Login' >Logout</Nav.Link>
                                            </Nav>

                                            <Navbar.Text>
                                                ( Signed in as: {JSON.parse(auth).username} )
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </>
                                    : <>
                                        <Navbar.Collapse className="justify-content-end" style={fontStyle}>
                                            <Nav>
                                                <Nav.Link href='/'>Home</Nav.Link>
                                                <Nav.Link href='/SignUp'>SignUp</Nav.Link>
                                                <Nav.Link href='/Login'>Login</Nav.Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </>
                            }
                        </Container>
                    </Navbar>
                </div>
            </header>
        </div>
    )
}

export default Header;