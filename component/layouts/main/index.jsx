import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { MenuOutline } from "react-ionicons";

const Index = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar expand={true}>                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Button variant="light">
                    <MenuOutline/>
                    </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                {children}
            </Container>
        </React.Fragment>
    )
}

export default Index