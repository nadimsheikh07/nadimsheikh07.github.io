import { Nav } from "react-bootstrap"
import { CloseOutline } from "react-ionicons"

const Index = ({ setOpenMenu,title }) => {
    return (
        <section className="menu-sidebar-container">
            <div className="close-icon" onClick={() => setOpenMenu(false)}>
                <CloseOutline/>
            </div>
            <div className="menu-sidebar">
                <Nav className="flex-column">
                    <Nav.Item>Projects</Nav.Item>
                    <Nav.Item onClick={() => setOpenMenu(false)}>Close</Nav.Item>
                </Nav>
            </div>
        </section>
    )
}


export default Index