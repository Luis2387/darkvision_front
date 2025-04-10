import React from "react";
import { Card, Col, Row,Form } from "react-bootstrap";
import { createColumnHelper } from '@tanstack/react-table'
import MainTable from "./MainTable";

type Data = {
    Drink: string
    Price: string
    Caffeinated: string
    Profit: number
}

const defaultData: Data[] = [
    {
        Drink: '🔥 latte',
        Price: '4',
        Caffeinated: "No",
        Profit: 0,
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "Yes",
        Profit: 1.72
    },
    {
        Drink: '🔥 latte',
        Price: '3',
        Caffeinated: "Yes",
        Profit: -1.21
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "NO",
        Profit: 0
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "NO",
        Profit: 0
    },
    {
        Drink: '🔥 latte',
        Price: '3',
        Caffeinated: "Yes",
        Profit: 1.75
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "Yes",
        Profit: 1.75
    },
    {
        Drink: '🔥 latte',
        Price: '4',
        Caffeinated: "No",
        Profit: 0,
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "Yes",
        Profit: 1.72
    },
    {
        Drink: '🔥 latte',
        Price: '3',
        Caffeinated: "Yes",
        Profit: -1.21
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "NO",
        Profit: 0
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "NO",
        Profit: 0
    },
    {
        Drink: '🔥 latte',
        Price: '3',
        Caffeinated: "Yes",
        Profit: 1.75
    },
    {
        Drink: '🌿 green tea',
        Price: '3',
        Caffeinated: "Yes",
        Profit: 1.75
    },
]

const columnHelper = createColumnHelper<Data>()

const columns = [
    columnHelper.accessor('Drink', {
        cell: (info: any) => info.getValue(),
    }),
    columnHelper.accessor((row: any) => row.Price, {
        id: 'Price',
        cell: (info: any) => <i>{info.getValue()} <button data-row="0" className="btn btn-success btn-sm ms-3">Buy Now</button></i>,
        header: () => "Price",
        enableSorting: true
    }),
    columnHelper.accessor('Caffeinated', {
        header: () => 'Caffeinated',
        cell: (info: any) => info.renderValue(),
    }),
    columnHelper.accessor('Profit', {
        header: () => "Profit",
        cell: (info: any) => {
            switch (info.row.original.Profit) {
                case 1.75:
                    return <span className="currency text-success">1.75</span>;
                case -1.21:
                    return <span className="currency text-danger">-1.21</span>;
                default:
                    return <span className="currency text-body">0</span>
                    break;
            }
        },
    })
]

const RenderColumnCells = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h5>Basic Table</h5>
                            <span className="d-block m-t-5">use class <code>table</code> inside table element</span>
                        </Card.Header>
                        <div className="d-sm-flex align-items-center mt-4">
                        <ul className="list-inline me-auto my-1 ms-4">
                            <li className="list-inline-item">
                                <select className="form-select">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                </select>
                            </li>
                            <span> entries per page</span>
                        </ul>
                        <ul className="list-inline ms-auto my-1 me-4">
                            <li className="list-inline-item">
                                <form className="form-search">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search...."
                                    />
                                </form>
                            </li>
                        </ul>
                    </div>
                        <Card.Body className="table-border-style">
                            <div className="table-responsive">
                                <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                                    <div className="datatable-container">
                                        <MainTable
                                            data={defaultData}
                                            columns={columns} />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default RenderColumnCells;