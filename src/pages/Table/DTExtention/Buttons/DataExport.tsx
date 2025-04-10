import React from 'react'
import BreadcrumbItem from '../../../../Common/BreadcrumbItem'
import TableDataExport from '../../../../views/Table/DTExtention/Button/DataExport'
import { Row } from 'react-bootstrap'
import ColumnSelect from '../../../../views/Table/DTExtention/Button/ColumnSelect'
import Excel from '../../../../views/Table/DTExtention/Button/Excel'
import Json from '../../../../views/Table/DTExtention/Button/Json'


const DataExport = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="Export Button" />
            <Row>
                <TableDataExport />
                <ColumnSelect />
                <Excel />
                <Json />
            </Row>
        </React.Fragment>
    )
}

export default DataExport