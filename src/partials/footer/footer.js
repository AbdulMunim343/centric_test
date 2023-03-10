import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { AiFillSkype } from 'react-icons/ai';
import './footer.scss'

const Footer = () => {
    return (
        <Container fluid className="footer_con">
            <Container>
                <Row>
                    <Col md={6} sx={12} sm={12} lg={6} xl={6} className="foot_logo">
                        <div ><img src={process.env.PUBLIC_URL + '/images/udixlogo.png'} alt="udix" /></div>
                    </Col>
                    <Col md={6}>

                        <Row>
                            <Col xs={12} sm={12} md={8} lg={8} xl={8} className="foot_menu d-flex justify-content-end align-items-center">
                                <Nav className="">
                                    <Nav.Link href="#home">home</Nav.Link>
                                    <Nav.Link href="#features">blog</Nav.Link>
                                    <Nav.Link href="#pricing">products</Nav.Link>
                                    <Nav.Link href="#pricing">contacts</Nav.Link>
                                </Nav>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="foot_button">
                                <span className="sign">sign in</span>
                                <span className="sign">sign up</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="foot_para">
                        <p>udix is a market-leading provider of digital marketing services, using<br /> proprietary tools and methodologies to generate high-value<br /> engagement for our customers.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className="icons_box">
                        <div ><img src={process.env.PUBLIC_URL + '/images/facebook.svg'} alt="icons" className="footer_ico1" /></div>
                        <div ><img src={process.env.PUBLIC_URL + '/images/youtube.svg'} alt="icons" className="footer_ico" /></div>
                        <div ><img src={process.env.PUBLIC_URL + '/images/linkedin.svg'} alt="icons" className="footer_ico" /></div>
                        <div ><img src={process.env.PUBLIC_URL + '/images/googleplus.svg'} alt="icons" className="footer_ico" /></div>
                        <div ><img src={process.env.PUBLIC_URL + '/images/skype.svg'} alt="icons" className="footer_ico" /></div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;