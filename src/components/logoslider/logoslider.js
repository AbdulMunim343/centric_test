import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import './logoslider.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const LogoSlider = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <AiOutlineArrowRight />,
        prevArrow: <AiOutlineArrowLeft />,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };




    return (


        <Container fluid>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="sliderheading">Working with a diverse global customer base</div>
                        <Slider {...settings}>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt="udix" />
                            </div>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/Dribbble.png'} alt="udix" />
                            </div>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/sketch.png'} alt="udix" />
                            </div>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/Behance.png'} alt="udix" />
                            </div>

                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt="udix" />
                            </div>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/Dribbble.png'} alt="udix" />
                            </div>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/sketch.png'} alt="udix" />
                            </div>
                            <div md={3} className="logo_container">
                                <img src={process.env.PUBLIC_URL + '/images/Behance.png'} alt="udix" />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default LogoSlider;