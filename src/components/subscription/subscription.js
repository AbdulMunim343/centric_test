import React from "react";
import './subscription.scss'
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const Subscription = () => {
    return (
        <Container fluid>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="sbs_box">
                        <div className="top-box d-flex align-items-center">
                            <div></div>
                        </div>
                        <h3>Working with us are the path to success</h3>
                        <p>Get the Onboarding Package for Free and enjoy our platform <br />with the support of our professional onboarding team.</p>
                        <div className="subs_input d-flex justify-content-center align-items-center">
                            <Form.Control type="text" placeholder="Name" />
                            <button>Surbscribe</button>
                        </div>
                        <p>WARNING: once you <br />join udix you will lose the need for any other landing page</p>
                        <div className="bottom-box d-flex justify-content-end align-items-center">
                            <div></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Subscription;