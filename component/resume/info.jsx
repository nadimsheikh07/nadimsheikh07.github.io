import { Container, Col, Row, Image, Nav } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import { LogoTwitter, LogoLinkedin, LogoInstagram, LogoGithub } from 'react-ionicons'

export const Info = () => {
    const { t } = useTranslation()
    return (
        <section className="info">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <Image src="image/myimage.jpg" roundedCircle />
                    </Col>
                    <Col xs="12" sm="12" md="8" lg="8" xl="8">
                        <div className="description">
                            <h1>{t('title')}</h1>
                            <p>{t('subtitle')}</p>

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
            </Container>
        </section>
    )
}