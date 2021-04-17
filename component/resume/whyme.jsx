import { Col, Container, Row } from "react-bootstrap"
import {TimeOutline,WifiOutline,ConstructOutline} from 'react-ionicons'
export const WhyMe = () => {
    return (
        <section className="whyme">
            <div className="heading-container">
                <h2>Why Me</h2>
            </div>

            <Container>
                <Row>
                    <Col>
                    <div className="icon">
                    <TimeOutline height="50px" width="50px"/>
                    </div>
                    <p>Operating an environment-friendly 5 Watt stakepool 24/7 with 99.9% uptime</p>
                    </Col>
                    <Col>
                    <div className="icon">
                    <WifiOutline height="50px" width="50px"/>
                    </div>
                    <p>Highly reliable because of very good Internet connection in order to get all my slots</p>
                    </Col>
                    <Col>
                    <div className="icon">
                    <ConstructOutline height="50px" width="50px"/>
                    </div>
                    <p>Running my stakepool from home, helping to truly decentralize the Cardano ecosystem</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}