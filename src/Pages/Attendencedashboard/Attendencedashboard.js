import React from "react";
import Message from "../../Components/Messagecomponent/Message";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import Buttoncomp from "../../Components/Buttoncomponent/Buttoncomp";
import Footercomp from "../../Components/Footercomponent/Footercomp";
export default function Attendencedashboard() {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* buttons start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
          <Buttoncomp name="Take-attendence" icon="fa-chart-bar" link="/takeattendence" />
          <Buttoncomp name="View-attendence" icon="fa-chart-bar" link="/viewattendence" />

          



           
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
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}
