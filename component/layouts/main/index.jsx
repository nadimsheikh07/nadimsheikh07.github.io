import React from "react";
import { Container, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { MenuOutline } from "react-ionicons";
import Sidebar from "react-sidebar";
import Sidemenu from "./sidemenu";

const Index = ({ children }) => {

    const [openMenu, setOpenMenu] = React.useState(false)

    return (
        <React.Fragment>
            <Sidebar
                sidebar={<Sidemenu title="Menu" setOpenMenu={setOpenMenu}/>}
                open={openMenu}
                pullRight={true}
                onSetOpen={() => setOpenMenu(!openMenu)}
                styles={{ sidebar: { background: "white" } }}
            >
                <Navbar expand={true}>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Button variant="light" onClick={() => setOpenMenu(!openMenu)}>
                                <MenuOutline />
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Container>
                    {children}
                </Container>
            </Sidebar>
        </React.Fragment>
    )
}

export default Index