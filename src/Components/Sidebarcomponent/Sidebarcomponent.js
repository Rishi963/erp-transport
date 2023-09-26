import React from "react";

export default function Sidebarcomponent(props) {
  const data = props.data
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-light navbar-light">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-hashtag me-2" />
            Dremerz
          </h3>
        </a>

        <div className="navbar-nav w-100">
          <a href="index.html" className="nav-item nav-link active">
            {props.active}
          </a>

          {data.map((item, i) => (
            <a key={item} href={item.link} className="nav-item nav-link ">
              {item.tab}
            </a>
          ))}
          {/* <i className="fa fa-tachometer-alt me-2" /> */}
          {/* <div className="nav-item dropdown">
              <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Pages</a>
              <div className="dropdown-menu bg-transparent border-0">
                <a href="signin.html" className="dropdown-item">Sign In</a>
                <a href="signup.html" className="dropdown-item">Sign Up</a>
                <a href="404.html" className="dropdown-item">404 Error</a>
                <a href="blank.html" className="dropdown-item">Blank Page</a>
              </div>
            </div> */}
        </div>
      </nav>
    </div>
  );
}
