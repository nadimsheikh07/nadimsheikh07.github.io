import { Container } from "react-bootstrap";

const Index = ({ children }) => {
    return (
        <div>            
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Index