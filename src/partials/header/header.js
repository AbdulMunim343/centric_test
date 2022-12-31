import React, { useState } from "react";
import { Container, Row, Col, Nav, Button, Offcanvas, Navbar } from "react-bootstrap";
import "./header.scss"


const Header = () => {
    const [nav, setNav] = useState(false);

    const changeBgColorOnScroll = () => {
        if (window.scrollY) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener("scroll", changeBgColorOnScroll);

    return (
        <Container fluid className={nav? 'header active_navbar':'header'}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="menu_visiblity">
                            <Row>
                                <Col md={2}>
                                    <img src={process.env.PUBLIC_URL + '/images/udix.png'} alt="udix" />
                                </Col>
                                <Col md={6}>
                                    <Nav className="">
                                        <Nav.Link href="#home">home</Nav.Link>
                                        <Nav.Link href="#features">blog</Nav.Link>
                                        <Nav.Link href="#pricing">products</Nav.Link>
                                        <Nav.Link href="#pricing">contacts</Nav.Link>
                                    </Nav>
                                </Col>
                                <Col md={4} className="d-flex justify-content-end align-items-center">
                                    <span className="sign nth1">sign in</span>
                                    <span className="sign">sign up</span>
                                </Col>
                            </Row>
                        </div>



                        <div className="mob_menu_visibility">
                            {[false].map((expand) => (
                                <Navbar key={expand} bg="light" expand={expand}>
                                    <Container fluid>
                                        <Navbar.Brand href="#"><img src={process.env.PUBLIC_URL + '/images/udix.png'} alt="udix" /></Navbar.Brand>
                                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                        <Navbar.Offcanvas
                                            id={`offcanvasNavbar-expand-${expand}`}
                                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                            placement="end"
                                        >
                                            <Offcanvas.Header closeButton>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                                    <Nav.Link className="mob_menu" href="#home">home</Nav.Link>
                                                    <Nav.Link className="mob_menu" href="#features">blog</Nav.Link>
                                                    <Nav.Link className="mob_menu" href="#pricing">products</Nav.Link>
                                                    <Nav.Link className="mob_menu" href="#pricing">contacts</Nav.Link>
                                                </Nav>

                                                <div md={4} className="mob_span">
                                                    <span className="sign nth1">sign in</span>
                                                    <span className="sign">sign up</span>
                                                </div>
                                            </Offcanvas.Body>
                                        </Navbar.Offcanvas>
                                    </Container>
                                </Navbar>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>


    )

}

export default Header;



