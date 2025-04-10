import React, { useState, createRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Card, Row, Col, Form } from "react-bootstrap";

const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const FormImageCropper = () => {
    const [enableAspectRatio, setEnableAspectRatio] = useState(false);
    const cropperRef = createRef<ReactCropperElement>();

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [imageWidth, setImageWidth] = useState(500); // Initial width
    const [imageHeight, setImageHeight] = useState(500); // Initial height

    // Function to calculate and set maxCanvasWidth and maxCanvasHeight
    const setMaxCanvasSize = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current.cropper;
            const imageElement = cropper.getCroppedCanvas();
            if (imageElement) {
                const canvasWidth = imageElement.width;
                const canvasHeight = imageElement.height;
                setImageWidth(canvasWidth);
                setImageHeight(canvasHeight)
            }
        }
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Image Cropper Plugin</h5>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <div className="col-md-7 mb-3 mb-md-0">
                            <Cropper
                                ref={cropperRef}
                                style={{ height: 400, width: "100%" }}
                                zoomTo={0.5}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={defaultSrc}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                crop={(event) => {
                                    setX(event.detail.x);
                                    setY(event.detail.y);
                                }}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false}
                                guides={true}
                                ready={setMaxCanvasSize}
                            />
                        </div>
                        <div className="col-md-5 mb-3 mb-md-0">
                            <div className="rounded bg-light px-4 py-3 mb-3">
                                <h5>Selection value</h5>
                                <Row>
                                    <Col xs={6}>
                                        <p><strong>x: </strong>&nbsp;{(x).toFixed(0)}</p>
                                        <p className="mb-1"><strong>y: </strong>&nbsp;{(y).toFixed(0)}</p>
                                    </Col>
                                    <Col xs={6}>
                                        <p><strong>width: </strong>&nbsp;{imageWidth}</p>
                                        <p className="mb-1"><strong>height: </strong>&nbsp;{imageHeight}</p>
                                    </Col>
                                </Row>
                            </div>

                            <Row className="mb-1">
                                <Col>
                                    <h6>Aspect Ratio</h6>
                                </Col>
                                <Col xs="auto">
                                    <Form.Check
                                        type="checkbox"
                                        id="cb-ratio"
                                        label="Enable"
                                        checked={enableAspectRatio}
                                        onChange={() => setEnableAspectRatio(!enableAspectRatio)}
                                    />
                                </Col>
                            </Row>
                            <div className="input-group mb-3">
                                <span className="input-group-text">A</span>
                                <Form.Control type="text" id="input-ratio" value="1.0" disabled={!enableAspectRatio} />
                            </div>
                            <Row className="mb-1">
                                <Col>
                                    <h6>Maximum size</h6>
                                </Col>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="max-checkbox" />
                                            <label className="form-check-label" htmlFor="max-checkbox"> Enable </label>
                                    </div>
                                </div>
                            </Row>
                            <Row className="g-1 g-sm-3 mb-4">
                                <div className="col-4">
                                    <div className="input-group">
                                        <span className="input-group-text">W</span>
                                        <input type="text" className="form-control" id="max-input-width" value="150" disabled />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-group">
                                        <span className="input-group-text">H</span>
                                        <input type="text" className="form-control" id="max-input-height" value="150" disabled/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <select id="max-input-unit" disabled className="form-control">
                                        <option>px</option>
                                        <option value="%">%</option>
                                    </select>
                                </div>
                            </Row>

                            <div className="row mb-1">
                                <div className="col">
                                    <h6>Minimum size</h6>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="min-checkbox" />
                                            <label className="form-check-label" htmlFor="min-checkbox"> Enable </label>
                                    </div>
                                </div>
                            </div>
                            <Row className="g-1 g-sm-3">
                                <div className="col-4">
                                    <div className="input-group">
                                        <span className="input-group-text">W</span>
                                        <input type="text" className="form-control" id="min-input-width" value="150" disabled />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-group">
                                        <span className="input-group-text">H</span>
                                        <input type="text" className="form-control" id="min-input-height" value="150" disabled/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <select id="min-input-unit" disabled className="form-control">
                                        <option> px </option>
                                        <option value="%"> % </option>
                                    </select>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormImageCropper;