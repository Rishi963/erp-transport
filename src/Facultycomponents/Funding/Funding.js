import React from "react";
import Footercomp from "../../Components/Footercomponent/Footercomp";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
export default function Funding() {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* form start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
           
            <div className="col-sm-12 col-xl-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Funding</h6>
                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                      />
                    </div>
                  </div><div className="row mb-3">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                      />
                    </div>
                  </div>

                  
                
                   
                 
                 
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </form>
              </div>
            </div>
           
            
           
          
          
            
          </div>
        </div>
        {/* form end */}

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
