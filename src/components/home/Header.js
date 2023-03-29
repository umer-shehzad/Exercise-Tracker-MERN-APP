import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';

const Header = () => {
    return(
        <div>
            <header>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                Exercise Tracker App
                            </Navbar.Brand>
                            <Button
                            variant='outline-success' 
                            >LOGOUT</Button>
                        </Container>
                    </Navbar>
                </div>
            </header>            
        </div>
    )
}

export default Header;