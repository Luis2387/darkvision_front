import {Link} from "react-router-dom";
import React from "react";


// img
import authregister from '../../assets/images/authentication/img-auth-register.png';
import logodark from '../../assets/images/logo-dark.svg';
import { Card, Row, Col, Form } from "react-bootstrap";

const Registerv1 = () => {
    return (
        <React.Fragment>
            <div className="auth-main v1">
                <div className="auth-wrapper">
                    <div className="auth-form">
                        <Card className="my-5">
                            <Card.Body>
                                <div className="text-center">
                                    <img src={authregister} alt="images" className="img-fluid mb-3" />
                                    <h4 className="f-w-500 mb-1">Register with your email</h4>
                                    <p className="mb-3">Already have an Account?
                                        <Link to="../pages/login-v1" className="link-primary">Log in</Link></p>
                                </div>
                                <Row>
                                    <Col sm={6}>
                                        <div className=" mb-3">
                                            <Form.Control type="text" placeholder="First Name" />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className=" mb-3">
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className=" mb-3">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </div>
                                <div className=" mb-3">
                                    <Form.Control type="number" placeholder="Phone number" />
                                </div>
                                <div className=" mb-3">
                                    <Form.Control type="password" placeholder="Password" />
                                </div>
                                <div className=" mb-3">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="d-flex mt-1 justify-content-between">
                                    <div className="form-check">
                                        <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" defaultChecked />
                                        <label className="form-check-label text-muted" htmlFor="customCheckc1">I agree to all the Terms & Condition</label>
                                    </div>
                                </div>
                                <div className="d-grid mt-4">
                                    <button type="button" className="btn btn-primary">Create Account</button>
                                </div>
                                <div className="saprator my-3">
                                    <span>Or continue with</span>
                                </div>
                                <div className="text-center">
                                    <ul className="list-inline mx-auto mt-3 mb-0">
                                        <li className="list-inline-item">
                                            <Link to="https://www.facebook.com/" className="avtar avtar-s rounded-circle bg-facebook" target="_blank">
                                                <i className="fab fa-facebook-f text-white"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://twitter.com/" className="avtar avtar-s rounded-circle bg-twitter" target="_blank">
                                                <i className="fab fa-twitter text-white"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="https://myaccount.google.com/" className="avtar avtar-s rounded-circle bg-googleplus" target="_blank">
                                                <i className="fab fa-google text-white"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="auth-sidefooter">
                        <img src={logodark} className="img-brand img-fluid" alt="images" />
                        <hr className="mb-3 mt-4" />
                        <Row>
                            <div className="col my-1">
                                <p className="m-0">Light Able ♥ crafted by Team <a href="https://themeforest.net/user/phoenixcoded" target="_blank"> Phoenixcoded</a></p>
                            </div>
                            <div className="col-auto my-1">
                                <ul className="list-inline footer-link mb-0">
                                    <li className="list-inline-item"><Link to="../index">Home</Link></li>
                                    <li className="list-inline-item"><Link to="https://pcoded.gitbook.io/light-able/" target="_blank">Documentation</Link></li>
                                    <li className="list-inline-item"><Link to="https://phoenixcoded.support-hub.io/" target="_blank">Support</Link></li>
                                </ul>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Registerv1;