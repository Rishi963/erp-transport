import React from 'react'

export default function F404() {
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
    {/* Spinner Start */}
    
    {/* Spinner End */}
    {/* Sidebar Start */}
   
    {/* Sidebar End */}
    {/* Content Start */}
    <div className="content">
      {/* Navbar Start */}
    
      {/* Navbar End */}
      {/* 404 Start */}
      <div className="container-fluid pt-4 px-4">
        <div className="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
          <div className="col-md-6 text-center p-4">
            <i className="bi bi-exclamation-triangle display-1 text-primary" />
            <h1 className="display-1 fw-bold">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website!
              Maybe go to our home page or try to use a search?</p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href='/'>Go Back To Home</a>
          </div>
        </div>
      </div>
      {/* 404 End */}
      {/* Footer Start */}
      
      {/* Footer End */}
    </div>
    {/* Content End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
  
  )
}
