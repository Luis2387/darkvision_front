
import imgStatus4 from '../../assets/images/widget/img-status-4.svg'
import imgStatus5 from "../../assets/images/widget/img-status-5.svg";
import imgStatus6 from "../../assets/images/widget/img-status-6.svg";

import facebook from "../../assets/images/widget/img-facebook.svg";
import status7 from "../../assets/images/widget/img-status-7.svg";
import google from "../../assets/images/widget/img-google.svg";
import status8 from "../../assets/images/widget/img-status-8.svg";
import twitter from "../../assets/images/widget/img-twitter.svg";
import status9 from "../../assets/images/widget/img-status-9.svg";

interface WidgetItem {
  id: number;
  cardImg: string;
  title: string;
  percentage?: number;
  bagdeColor?: string;
  description: string;
}

const widgetData: WidgetItem[] = [
  {
    id: 1,
    cardImg: imgStatus4,
    title: "Last report",
    description: "April 4th 2025",
    bagdeColor: "success",
  },
  {
    id: 2,
    cardImg: imgStatus5,
    title: "Issues Found",
    price: "5",
    description: "Since last report",
    bagdeColor: "primary",
  },
  {
    id: 3,
    cardImg: imgStatus6,
    title: "Recomendation",
    description: "Take inmediate action",
  },
];


interface socialWidgetsItem {
  id: number;
  img: string;
  percentage: string;
  bgImg: string;
}

const socialWidgetsData: socialWidgetsItem[] = [
  {
    id: 1,
    img: facebook,
    percentage: "7.2",
    bgImg: status7
  },
  {
    id: 2,
    img: google,
    percentage: "5.9",
    bgImg: status8
  },
  {
    id: 3,
    img: twitter,
    percentage: "6.2",
    bgImg: status9
  }
]

export { widgetData, socialWidgetsData };