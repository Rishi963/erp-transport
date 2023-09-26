import React from "react";
import Message from "../../Components/Messagecomponent/Message";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import Buttoncomp from "../../Components/Buttoncomponent/Buttoncomp";
import Footercomp from "../../Components/Footercomponent/Footercomp";
import '../../style.css';

import { useParams } from "react-router-dom";

export default function Admin_Main() {
  
let Params = useParams();
const sidebardata = [
  
 
  {
    tab: "Dashboard",
    link: "/dailyreport/"+Params.user,
  },
];
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent data={sidebardata} active={null}  />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* buttons start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
          <Buttoncomp name="Student" icon="fa-chart-bar" link={null} />
          <Buttoncomp name="Staff" icon="fa-chart-bar" link={null} />
          <Buttoncomp name="User" icon="fa-chart-bar" link={null} />


          {/* <Buttoncomp name="Bus-Info" icon="fa-chart-bar" link={"/businfo/"+Params.user} /> */}
         
          
          



           
          </div>
        </div>
        {/* buttons end */}
        {/* Widgets-start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <Message />
          </div>
        </div>
        {/* widgets end */}
        {/* Footer Start */}
       <Footercomp/>
        {/* Footer End */}
      </div>
      {/* Content End */}
      {/* Back to Top */}
      
    </div>
  );
}
