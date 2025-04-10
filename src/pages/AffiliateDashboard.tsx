
import BreadcrumbItem from "../Common/BreadcrumbItem";
import React from "react";
import { affiliateWidget,affiliateData,topVisitorData} from "../Common/jsonData";
import { Card, CardHeader, Col, Row } from "react-bootstrap";

const AffiliateDashboard = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Dashboard" subTitle="Affiliate Dashboard" />
      <Row>
        {(affiliateWidget || []).map((item, key) => (
          <Col md={12} xxl={4} key={key}>
            <Card className="statistics-card-1">
              <Card.Body>
                <img src={item.cardImg} alt="img" className="img-fluid img-bg" />
                <div className="d-flex align-items-center">
                  <div className={"avtar " + item.iconColor + " text-white me-3"}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <p className="text-muted mb-0">{item.title}</p>
                    <div className="d-flex align-items-end">
                      <h2 className="mb-0 f-w-500">{item.suffix && item.suffix}
                        {item.price}
                        {item.prefix && item.prefix}</h2>
                      <span className={"badge bg-light-" + item.badgeColor + " ms-2"}>
                        <i className="ti ti-chevrons-up"></i> {item.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col md={6}>
          <Card className="table-card">
            <CardHeader>
              <h5>Affiliates</h5>
            </CardHeader>
            <Card.Body className="py-3 px-0">
              <div className="table-responsive affiliate-table">
                <table className="table table-hover table-borderless mb-0">
                  <tbody>

                    {(affiliateData || []).map((item, key) => (
                      <tr key={key}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.img} alt="" className="img-fluid wid-30 rounded-1" />
                            <h6 className="mb-0 ms-2">{item.name}</h6>
                          </div>
                        </td>
                        <td>{item.subTitle}</td>
                        <td className="text-end f-w-600">${item.price}</td>
                        <td><i className={item.arrowUp ? "ti ti-arrow-up text-success f-18 align-text-bottom" : "ti ti-arrow-down text-danger f-18 align-text-bottom"}></i>
                          {item.percentage}%</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="table-card">
            <CardHeader>
              <h5>Top Visitors</h5>
            </CardHeader>
            <Card.Body className="py-3 px-0">
              <div className="table-responsive affiliate-table">
                <table className="table table-hover table-borderless mb-0">
                  <tbody>

                    {(topVisitorData || []).map((item, key) => (
                      <tr key={key}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.img} alt="" className="img-fluid wid-30 rounded-1" />
                            <h6 className="mb-0 ms-2">{item.name}</h6>
                          </div>
                        </td>
                        {/* <td>{item.subTitle}</td> */}
                        <td className="text-end f-w-600">${item.price}</td>
                        <td><i className={item.arrowUp ? "ti ti-arrow-up text-success f-18 align-text-bottom" : "ti ti-arrow-down text-danger f-18 align-text-bottom"}></i>
                          {item.percentage}%</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AffiliateDashboard;