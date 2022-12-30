import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineAppSettingsAlt } from 'react-icons/md';

import './SolutionsSection.scss';


const SolutionsSection = () => {
    return (
        <>
            <div className="sol_head">
                <h3>Solutions that will change your business forever</h3>
                <p>Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts.</p>
            </div>
            <Row>
                <Col md={4} className="solutionBox">
                    <FiTarget className="mb-3 main_ico" />
                    <h5 className="mb-3">CRM Product</h5>
                    <p className="mb-3">Some networks believe that by only offering. </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <BsArrowRightShort className="ico" />
                        <div className="styleBox"></div>
                    </div>

                </Col>

                <Col md={4} className="solutionBox">
                    <CgWebsite className="mb-3 main_ico" />
                    <h5 className="mb-3">Web Services</h5>
                    <p className="mb-3">Some networks believe that by only offering. </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <BsArrowRightShort className="ico" />
                        <div className="styleBox"></div>
                    </div>
                </Col>

                <Col md={4} className="solutionBox">
                    <MdOutlineAppSettingsAlt className="mb-3 main_ico" />
                    <h5 className="mb-3">Mobile App</h5>
                    <p className="mb-3">Some networks believe that by only offering. </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <BsArrowRightShort className="ico" />
                        <div className="styleBox"></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SolutionsSection