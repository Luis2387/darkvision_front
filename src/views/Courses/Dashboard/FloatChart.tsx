import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const FloatChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: {
          show: false
        }
      },
      colors: ['#f4c22b', '#4680ff'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'top'
      },
      markers: {
        size: 1,
        colors: ['#fff', '#fff', '#fff'],
        strokeColors: ['#f4c22b', '#4680ff'],
        strokeWidth: 1,
        shape: 'circle',
        hover: {
          size: 4
        }
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      grid: {
        show: false,
      },
      series: [
        {
          name: 'Revenue',
          data: [200, 320, 320, 275, 275, 400, 400, 300, 440, 320, 320, 275, 275, 400, 300, 440]
        },
        {
          name: 'Sales',
          data: [200, 250, 240, 300, 340, 320, 320, 400, 350, 250, 240, 300, 340, 320, 400, 350]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    const chart = new ApexCharts(document.querySelector("#revenue-sales-chart"), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return <div id="revenue-sales-chart" />;
};

export default FloatChart;
