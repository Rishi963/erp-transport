import React from "react";
import Message from "../../Components/Messagecomponent/Message";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import Buttoncomp from "../../Components/Buttoncomponent/Buttoncomp";
import Footercomp from "../../Components/Footercomponent/Footercomp";
import '../../style.css';

import { useParams } from "react-router-dom";

export default function Transportdashboard() {
  
let Params = useParams();
const sidebardata = [
  
  {
    tab: "Student-Info",
    link: "/studentinfo/"+Params.user,
  },
  {
    tab: "Bus-Info",
    link: "/businfo/"+Params.user,
  },
  {
    tab: "Fee-Info",
    link: "/feeinfo/"+Params.user,
  },
  {
    tab: "Maintenance",
    link: "/maintenance/"+Params.user,
  },
  {
    tab: "Daily Report",
    link: "/dailyreport/"+Params.user,
  },
];
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent data={sidebardata} active={"Dashboard"}  />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* buttons start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
          <Buttoncomp name="Student-Info" icon="fa-chart-bar" link={"/studentinfo/"+Params.user} />
          <Buttoncomp name="Bus-Info" icon="fa-chart-bar" link={"/businfo/"+Params.user} />
          <Buttoncomp name="Driver-Info" icon="fa-chart-bar" link={"/driverinfo/"+Params.user} />
          <Buttoncomp name="Fee-Info" icon="fa-chart-bar" link={"/feeinfo/"+Params.user} />
          <Buttoncomp name="Maintenance" icon="fa-chart-bar" link={"/maintenance/"+Params.user} />

          <Buttoncomp name="Daily-report" icon="fa-chart-bar" link={"/dailyreport/"+Params.user} />
          
          




          {Params.id}



           
          </div>
        </div>
        {/* buttons end */}
        {/* Widgets-start */}
        
      </div>
      {/* Content End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}
