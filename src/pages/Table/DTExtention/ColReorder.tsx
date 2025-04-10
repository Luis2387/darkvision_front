import React from 'react'
import BreadcrumbItem from '../../../Common/BreadcrumbItem'
import { Row } from 'react-bootstrap'
import BasicColumnReorder from '../../../views/Table/DTExtention/ColReorderData/BasicColumnReorder'
import RealtimeUpdating from '../../../views/Table/DTExtention/ColReorderData/RealtimeUpdating'
import StateSaving from '../../../views/Table/DTExtention/ColReorderData/StateSaving'
import PredefinedCol from '../../../views/Table/DTExtention/ColReorderData/PredefinedCol'

const ColReorder = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="DataTable" subTitle="ColReorder" />
            <Row>
                <BasicColumnReorder />
                <RealtimeUpdating />
                <StateSaving />
                <PredefinedCol />
            </Row>
        </React.Fragment>
    )
}

export default ColReorder