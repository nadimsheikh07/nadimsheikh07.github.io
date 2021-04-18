import { Nav } from "react-bootstrap"

const Index = ({setOpenMenu}) => {
    return (
        <section className="menu-sidebar">
            <Nav className="flex-column">
                <Nav.Item>Projects</Nav.Item>
                <Nav.Item onClick={()=>setOpenMenu(false)}>Close</Nav.Item>
            </Nav>
        </section>
    )
}


export default Index