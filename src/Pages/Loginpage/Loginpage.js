import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const navigate = useNavigate();

  const [uname, setuname] = React.useState("");
  const [pass, setpass] = React.useState("");
  const submitbtn = () => {
    const log = {
      username: uname,
      password: pass,
    };
    alert(log);
  };
  const onsubmitdata = () => {
    let url = "/transport-dashboard/";
    if(uname == "Admin" & pass =="transport@123"){
      navigate("/transport-dashboard/Admin");
    }else{
      alert("Enter valid Credentials");
    }
  };

  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="index.html" className>
                    <h3 className="text-primary">Dzentor</h3>
                  </a>
                  <h3>Sign In</h3>
                </div>
                <form onSubmit={onsubmitdata}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      onChange={(e) => setuname(e.target.value)}
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      onChange={(e) => setpass(e.target.value)}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary py-3 w-100 mb-4"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
