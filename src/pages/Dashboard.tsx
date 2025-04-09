import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";

import imgStatus4 from '../assets/images/widget/img-status-4.svg'
import imgStatus5 from "../assets/images/widget/img-status-5.svg";
import imgStatus6 from "../assets/images/widget/img-status-6.svg";


import BreadcrumbItem from "../Common/BreadcrumbItem";
import Widgets from "../views/Dashboard/widgets";
import { widgetData,socialWidgetsData } from "../Common/jsonData";
import UnitedStatesMap from "../views/Dashboard/UnitedStatesMap";
import UsersCharts from "../views/Dashboard/UsersCharts";
import SocialWidgets from "../views/Dashboard/SocialWidgets";
import RecentUsers from "../views/Dashboard/RecentUsers";
import RecentTableData from "../views/Dashboard/RecentTableData";

const Dashboard = () => {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const token = localStorage.getItem("token");
        const companyReportsRes = await axios.get("http://localhost:8000/reports", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const reports = companyReportsRes.data.reports;
        const lastReport = reports[reports.length - 1];

        const lastReportRes = await axios.get(`http://localhost:8000/reports/${lastReport.split("/").pop()}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReport(lastReportRes.data.data);
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchReport();
  }, []);

  const widgetData = report
    ? [
        {
          id: 1,
          cardImg: imgStatus4,
          title: "Last report",
          description: new Date(report.inspection_date).toLocaleDateString(),
        },
        {
          id: 2,
          cardImg: imgStatus5,
          title: "Issues Found",
          price: report.issues_found,
          description: "Since last report",
        },
        {
          id: 3,
          cardImg: imgStatus6,
          title: "Recommendation",
          description: report.summary,
        },
      ]
    : [];

  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Dashboard" subTitle="Home"  />
      <Row>
        <Widgets widgetData={widgetData} />
        <UnitedStatesMap />
        <UsersCharts />  
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;