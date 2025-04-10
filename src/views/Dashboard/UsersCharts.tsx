import React from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";
import { UserChartsData } from "./DashboardCharts";

const UsersCharts = () => {
  return (
    <React.Fragment>
      <Col md={6} xl={5}>
        <Card>
          <Card.Header className="d-flex align-items-center justify-content-between py-3">
            <h5>Money saved in the last year</h5>
            <Dropdown>
              <Dropdown.Toggle
                as="a" className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none"
                href="#!"><i className="material-icons-two-tone f-18">more_vert</i></Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item href="#">View</Dropdown.Item>
                <Dropdown.Item href="#">Edit</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div className="avtar avtar-s bg-light-primary flex-shrink-0">
                <i className="ph-duotone ph-money f-20"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <p className="mb-0 text-muted">Total savings</p>
                <h5 className="mb-0">$2,449,000.95</h5>
              </div>
            </div>
            <div id="earnings-users-chart">
              <UserChartsData />
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <div className="d-flex">
                  <div className="avtar avtar-s bg-light-warning flex-shrink-0">
                    <i className="ph-duotone ph-lightning f-20"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0 text-muted">Total pipelines</p>
                    <h6 className="mb-0">235</h6>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex">
                  <div className="avtar avtar-s bg-light-danger flex-shrink-0">
                    <i className="ph-duotone ph-map-pin f-20"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0 text-muted">Total location</p>
                    <h6 className="mb-0">26</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default UsersCharts;
