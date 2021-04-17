import { Col, Row } from "react-bootstrap"
import { BulbOutline, GlobeOutline, HammerOutline, LaptopOutline, MegaphoneOutline, PhonePortraitOutline } from "react-ionicons"

export const WhatIDo = () => {
    return (
        <section className="service-container">
            <div className="heading-container">
                <h2>What I Do</h2>
            </div>

            <Row>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <section className="service-box">
                        <div className="icon">
                            <GlobeOutline height="50px" width="50px" />
                        </div>
                        <h3>Web Designing</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <section className="service-box">
                        <div className="icon">
                            <HammerOutline height="50px" width="50px" />
                        </div>
                        <h3>Web Development</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <section className="service-box">
                        <div className="icon">
                            <PhonePortraitOutline height="50px" width="50px" />
                        </div>
                        <h3>Mobile App Development</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <section className="service-box">
                        <div className="icon">
                            <MegaphoneOutline height="50px" width="50px" />
                        </div>
                        <h3>Digital Marketing</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <section className="service-box">
                        <div className="icon">
                            <BulbOutline height="50px" width="50px" />
                        </div>
                        <h3>SEO/SMO</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <section className="service-box">
                        <div className="icon">
                            <LaptopOutline height="50px" width="50px" />
                        </div>
                        <h3>Software Development</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                </Col>
            </Row>
        </section>
    )
}