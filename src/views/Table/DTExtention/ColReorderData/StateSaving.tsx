import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { data } from '../../../../Common/jsonData';
import TableContainer from '../../../../Common/TableContainer';

const StateSaving = () => {

    const columns = [
        { header: "Name", accessorKey: "Name", enableColumnFilter: false },
        { header: "Position", accessorKey: "position", enableColumnFilter: false },
        { header: "Office", accessorKey: "office", enableColumnFilter: false },
        { header: "Age", accessorKey: "age", enableColumnFilter: false },
        { header: "Start Date", accessorKey: "startDate", enableColumnFilter: false },
        { header: "Salary", accessorKey: "salary", enableColumnFilter: false },
    ];

    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <h5>State Saving</h5>
                            <small>A useful interaction pattern to use in DataTables is state saving, so when the end user reloads or revisits a page its previous state is retained.</small>
                        </Card.Header>
                        <Card.Body className="table-border-style">
                            <div id="pc-dt-export">
                                <TableContainer
                                    columns={columns || []}
                                    data={data || []}
                                    isGlobalFilter={true}
                                    isBordered={false}
                                    customPageSize={10}
                                    isPagination={true}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default StateSaving;
