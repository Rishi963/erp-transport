import React from "react";
import Message from "../../Components/Messagecomponent/Message";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import Buttoncomp from "../../Components/Buttoncomponent/Buttoncomp";
export default function Studentdashboard() {
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
            <Buttoncomp name="My Details" icon="fa-info" link="/student-details" />
            <Buttoncomp name="Mentorform" icon="fa-qrcode" link="/mentorform" />
            <Buttoncomp name="Achivements" icon="fa-trophy" link="/achivements" />
            <Buttoncomp name="Fees Details" icon="fa-credit-card" link="/fee-details" />
            <Buttoncomp name="Materials" icon="fa-book" link="/materials" />
            <Buttoncomp name="Attendence" icon="fa-plus-square" link="/attendence" />
            <Buttoncomp name="Results" icon="fa-chart-bar" link="/results" />
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
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light rounded-top p-4">
            <div className="row">
              <div className="col-12 col-sm-6 text-center text-sm-start">
                © <a href="#">DREMERZ</a>, All Right Reserved.
              </div>
              <div className="col-12 col-sm-6 text-center text-sm-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a href="https://dremerz.in">DREMERZ</a>
              </div>
            </div>
          </div>
        </div>
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
