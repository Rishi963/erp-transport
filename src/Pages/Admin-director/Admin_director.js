import React from "react";
import Message from "../../Components/Messagecomponent/Message";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import Buttoncomp from "../../Components/Buttoncomponent/Buttoncomp";
import Footercomp from "../../Components/Footercomponent/Footercomp";
import '../../style.css';

import { useParams } from "react-router-dom";

export default function Admin_director() {
  
let Params = useParams();
const sidebardata = [
  
 
  {
    tab: "Transport",
    link: "/transport-dashboard/"+Params.user,
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
          <Buttoncomp name="Transport" icon="fa-chart-bar" link={"/transport-dashboard/"+Params.user} />
         


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
