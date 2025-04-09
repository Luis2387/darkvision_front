import React from "react";
import { Card, Col } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";

const RealtimeChart = () => {
    var data: any = [];

    function getDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
        var i = 0;
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            data.push({
                x,
                y
            });
            baseval += 86400000;
            i++;
        }
    }

    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 90
    });


    const series: any = [
        {
            data: data
        }
    ];

    const options: any = {
        chart: {
            height: 300,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 2000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        colors: ['#04A9F5'],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: 777600000
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: false
        }
    };
    return (
        <React.Fragment>
            <Col md={6}>
                <Card>
                    <Card.Header>
                        <h5>Realtime Chart</h5>
                    </Card.Header>
                    <Card.Body>
                        <ReactApexChart
                            id="ine-chart-2"
                            dir="ltr"
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="line"
                            height={350}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default RealtimeChart;
