import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../partials/header/header";
import { BiChevronDownCircle } from 'react-icons/bi'
import './hero.scss'


const Hero = () => {
    return (
        <>
            <Header />
            <Container fluid className="hero_container">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={12} xs={12} md={8} lg={8} xl={8}>
                            <Row>
                                <Col md={6} xs={12} sm={12} lg={6} xl={6} className="left_box d-flex align-items-center">
                                    <div>
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={process.env.PUBLIC_URL + '/images/Vector.png'} alt="udix" />
                                            <span className="ml-3 rating">Top Market Compnay</span>
                                        </div>
                                        <h1 className="focus mb-3">Focus On The <br />Work That <br />Matters</h1>
                                        <p className="udix_para  mb-3">
                                            udix is the world's first smart workspace.<br />
                                            we bring your all team's content togather<br />
                                            while letting you use the tools you love
                                        </p>
                                        <span className="read">Read me <BiChevronDownCircle /></span>
                                    </div>
                                </Col>
                                <Col sm={12} xs={12} md={6} lg={6} xl={6} className="right_box d-flex align-items-center">
                                    <Card className="login">
                                        <Card.Body>
                                            <Row>
                                                <Col md={10} sm={10} xs={10} lg={10} xl={10}>
                                                    <h5>Get Started Now</h5>
                                                    <Form>
                                                        <Form.Control type="input" className="login_input mb-3" placeholder="Name" />
                                                        <Form.Control type="input" className="login_input mb-3" placeholder="Email" />
                                                        <Form.Control type="input" className="login_input mb-3" placeholder="Phone Number" />
                                                        <Form.Control type="input" className="login_input mb-3" placeholder="Company Name" />
                                                    </Form>

                                                    <button className="sign_button mt-3">Sign up</button>
                                                    <div className="mt-3">
                                                        <span className="support">support:</span>
                                                        <span className="email">help@udix.com</span>
                                                    </div>

                                                </Col>
                                                <Col sm={2} xs={2} md={2} xl={2} lg={2}  className="line_cont">
                                                    <img src={process.env.PUBLIC_URL + '/images/1.svg'} className="laptop" alt="udix" />
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Hero;