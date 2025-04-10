import {data} from '../../../Common/jsonData'
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import DataTable from 'react-data-table-component';

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todo"
};

const Table2 = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row: any) => row.Name,
      sortable: true
    },
    {
      name: "POSITION",
      selector: (row: any) => row.position,
      sortable: true
    },
    {
      name: "OFFICE",
      selector: (row: any) => row.office,
      sortable: true
    },
    {
      name: "AGE",
      selector: (row: any) => row.age,
      sortable: true
    },
    {
      name: "START DATE",
      selector: (row: any) => row.startDate,
      sortable: true
    },
    {
      name: "SALARY",
      selector: (row: any) => row.salary,
      sortable: true
    }
  ];

  const [pageSize, setPageSize] = useState<number>();

  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value) || pageSize);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} md={6}>
          <div className="dataTables_length" id="dom-jqry_length">
            <label className="d-flex align-items-center">
              Show{" "}
              <select
                onChange={onChangeInSelect}
                className="form-select form-select-sm"
                style={{ width: "9%" }}
              >
                {[10, 25, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{" "}
              entries
            </label>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div id="dom-jqry_filter" className="dataTables_filter">
            <label className="d-flex align-items-center justify-content-end">
              Search:
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder=""
                aria-controls="dom-jqry"
                onChange={handleSearchChange}
                value={searchTerm}
                style={{ width: "25%" }}
              />
            </label>
          </div>
        </Col>
      </Row>
      <DataTable
        striped={true}
        columns={columns}
        data={filteredData}
        paginationComponentOptions={paginationComponentOptions}
        pagination
        selectableRows
        className="table-bordered nowrap"
      />
    </React.Fragment>
  );
};

export default Table2;
