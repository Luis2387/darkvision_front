import React from 'react';
import { Card, Table } from 'react-bootstrap';

const BorderlessTable = () => {
  return (
    <React.Fragment>
    <Card>
      <Card.Header>
        <h5>Borderless Table</h5>
      </Card.Header>
      <Card.Body className="table-border-style">
        <div className="table-responsive">
          <Table borderless>
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
    </React.Fragment>
  );
};

export default BorderlessTable;
