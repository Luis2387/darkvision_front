import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const FormControls: React.FC = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Form controls</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Form onSubmit={(event: any) => event.preventDefault()}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                                    <Form.Control type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Enter email" />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                                    <Form.Control type="password" id="exampleInputPassword1" placeholder="Password" autoComplete="off" />
                                </div>
                                <div className="mb-3 form-check">
                                    <Form.Check.Input type="checkbox" id="exampleCheck1" />
                                    <label htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <Button type="submit" variant="btn btn-primary mb-4" className="mb-4">Submit</Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form>
                                <div className="mb-3">
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control type="text" placeholder="Text" />
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="exampleFormControlSelect1">Example select</Form.Label>
                                    <Form.Select id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3">
                                    <Form.Label htmlFor="exampleFormControlTextarea1">Example textarea</Form.Label>
                                    <Form.Control as="textarea" id="exampleFormControlTextarea1" rows={3}></Form.Control>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default FormControls;