import React from "react";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
export default function Feedetails() {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* table start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                {/* <h6 className="mb-4">Basic Table</h6> */}
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>Doe</td>
                    </tr>
                    <tr>
                      <th>Student-id</th>
                      <td>Doe</td>
                    </tr>
                    <tr>
                      <th>Regno</th>
                      <td>Doe</td>
                    </tr>
                    <tr>
                      <th>Hostel/Day-scholor</th>
                      <td>Doe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                {/* <h6 className="mb-4">Accented Table</h6> */}
                <img src="" style={{width: '200px', height: '200px'}} />
              </div>
            </div>

            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                {/* <h6 className="mb-4">Responsive Table</h6> */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">sno</th>
                        <th scope="col">Title</th>
                        <th scope="col">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>John</td>
                        <td>Doe</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table end */}

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
