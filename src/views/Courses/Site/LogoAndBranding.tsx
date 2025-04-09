import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const LogoAndBranding = () => {
    const [selectedFiles, setSelectedFiles] = useState<any>([]);

    function handleAcceptedFiles(files: any) {
        const updatedFiles = files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setSelectedFiles(updatedFiles);
    }

    return (
        <React.Fragment>
            <h5>Logo & Branding</h5>
            <p className="text-muted mb-4">Incorporate a custom logo and favicon, and fine-tune your school
                thumbnail to enhance its appearance and branding</p>
            <Row className="g-3">
                {['Logo & Branding', 'Thumbnail', 'Favicon'].map((label, index) => (
                    <Col sm={6} md={4} key={index}>
                        <p className="mb-2">{label}</p>
                        <Dropzone
                            onDrop={acceptedFiles => handleAcceptedFiles(acceptedFiles)}
                        >
                            {({ getRootProps }) => (
                                <div className="dropzone dz-clickable text-center">
                                    <div className="dz-message needsclick" {...getRootProps()}>
                                        <div className="mb-3">
                                            <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                        </div>
                                        <p className="my-4">Drop files here to upload</p>
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                    </Col>
                ))}
            </Row>
            <Row className="g-3 mt-4">
                {selectedFiles.map((file: any, index: number) => (
                    <Col sm={6} md={4} key={index}>
                        <div className="text-center">
                            <img src={file.preview} alt={file.name} className="img-fluid rounded" />
                            <p className="mt-2 text-truncate">{file.name}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )
}

export default LogoAndBranding;
