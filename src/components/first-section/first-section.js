import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./first-section.scss"
import { BiChevronRightCircle } from 'react-icons/bi';
import Slider from "react-slick";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import SolutionsSection from "../solutions-section/solutionsSection";


const FirstSection = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<AiOutlineArrowRight/>,
        prevArrow:<AiOutlineArrowLeft/>
    };


    return (
        <>
            <Container fluid>
                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Row>
                                <Col md={12} className="udix d-flex justify-content-end align-items-center mb-3">
                                    <img src={process.env.PUBLIC_URL + '/images/udixlogo.png'} alt="udix" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img src={process.env.PUBLIC_URL + '/images/img1.png'} className="udix1" width="100%" alt="udix" />
                                </Col>
                                <Col md={6} className="text_slider">

                                    <Slider {...settings}>
                                        <div>
                                            <h3 className="fs_sec">is a leading provider of digital marketing services</h3>
                                            <p className="fs_para">
                                                Using proprietary tools and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="fs_sec">is a leading provider of digital marketing services</h3>
                                            <p className="fs_para">
                                                Using proprietary tools and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="fs_sec">is a leading provider of digital marketing services</h3>
                                            <p className="fs_para">
                                                Using proprietary tools and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.
                                            </p>
                                        </div>

                                    </Slider>

                                </Col>
                            </Row>

                            <div className="mt-5 mb-5"><img src={process.env.PUBLIC_URL + '/images/divider.png'} width="100%" alt="udix" /></div>
                            <SolutionsSection />
                            <div className="mt-5 mb-5"><img src={process.env.PUBLIC_URL + '/images/divider.png'} width="100%" alt="udix" /></div>

                            <Row>
                                <Col md={6}>
                                    <img src={process.env.PUBLIC_URL + '/images/illustrations.png'} className="udix2" width="100%" alt="udix" />
                                </Col>
                                <Col md={6} className="text_conatiner">
                                    <h3 className="sec_sec mb3-">Creativity & Technology</h3>
                                    <p className="sec_para">
                                        Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results
                                    </p>

                                    <h3 className="sec_sec mb-3">Defines our true value</h3>
                                    <p className="sec_para mb-5">
                                        Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech.
                                    </p>
                                    <span className="solution mt-5">Check our solutions <BiChevronRightCircle /></span>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>

    )
}

export default FirstSection;