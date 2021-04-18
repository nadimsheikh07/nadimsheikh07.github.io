import { Container, Col, Row, Image, Nav } from "react-bootstrap"

import { LogoTwitter, LogoLinkedin, LogoInstagram, LogoGithub } from 'react-ionicons'

export const Info = () => {

    return (
        <section className="info">

            <Row>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <div className="image">
                        <Image src="image/myimage.jpg" roundedCircle />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="8" lg="8" xl="8">
                    <div className="description">
                        <h1>Nadim Sheikh</h1>
                        <p>Sr. Software Engineer | Laravel | ReactJs | ReactNative | NextJs</p>

                        <Nav>
                            <Nav.Item>
                                <Nav.Link target="_blank" href="https://twitter.com/NadimSh87388181">
                                    <LogoTwitter />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target="_blank" href="https://www.linkedin.com/in/nadim-sheikh-b511709b/">
                                    <LogoLinkedin />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target="_blank" href="https://github.com/nadimsheikh07/">
                                    <LogoGithub />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target="_blank" href="https://www.instagram.com/nadim.sheikh.07/">
                                    <LogoInstagram />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </div>

                    <div className="hireme">

                        <a className="btn btn-primary" href="mailto:nadim.sheikh.07@gmail.com">Hire Me</a>
                    </div>
                </Col>
            </Row>

        </section>
    )
}