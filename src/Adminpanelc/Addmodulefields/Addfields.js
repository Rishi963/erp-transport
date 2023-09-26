import React from "react";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import  { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

export default function Addfields() {

  let Params = useParams();
    const [data, setdata] = useState([]);
    const getData = () => {
      let url = "http://localhost:3002/allmodule";
  
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setdata(res);
        });
    };
   
  
    useEffect(() => {
      getData();
    }, []);

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
          
           
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">All Modules</h6>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">sno</th>
                        <th scope="col">Module ID</th>
                        <th scope="col">Module Name</th>
                        <th scope="col">Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                    { data.map((item,i)=>(
   
   <tr>
    <th scope="row">{i+1}</th>
    <td scope="col">{item.Module_id}</td>
    <td scope="col">{item.Module_name}</td>
    <td scope="col"> 
    <button type="submit" className="btn btn-primary"> View </button>
    &nbsp; &nbsp;
    <button type="submit" className="btn btn-primary"> Add </button>

                  </td>
    
 </tr>
  

   ))
   }
                     
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
