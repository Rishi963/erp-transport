import React from "react";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import { useParams } from "react-router-dom";
import  { useState, useEffect } from 'react';
export default function Studentinfo() {
  
  let Params = useParams();

    const [S_data, set_sdata] = useState([]);
    const getData = () => {
      let url = "http://localhost:3002/student-info";
  
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
            set_sdata(res);
            console.warn(res);
        });
    };
   
  
    useEffect(() => {
      getData();
    }, []);

    const sidebardata = [
      {
        tab: "Dashboard",
        link: "/transport-dashboard/"+ Params.user,
      },
      {
        tab: "Bus-Info",
        link: "/businfo/"+Params.user,
      },
      {
        tab: "Fee-Info",
        link: "/feeinfo/"+Params.user,
      },
      {
        tab: "Maintenance",
        link: "/maintenance/"+Params.user,
      },
      {
        tab: "Daily Report",
        link: "/dailyreport/"+Params.user,
      },
    ];

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent data={sidebardata} active={"Student-info"} />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* table start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
         
          <Breadcrumbs
              bc="Transport/Student-info"
              path={
                Params.user == "Admin"
                  ? "/transport-dashboard/Admin"
                  : "/transport-dashboard/user"
              }
            />
            <div className="col-12">
              
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4"> Student Info</h6>
                
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Bus no</th>
                        <th scope="col">S_Id</th>
                        <th scope="col">S_Name</th>
                         <th scope="col">S_Batch</th>
                         <th scope="col">S_Address</th>
                         <th scope="col">S_Dept</th>
                        <th scope="col">S_Boardingpoint</th>
                      </tr>
                    </thead>
                    <tbody>
                    { S_data.map((item,i)=>(
   
   <tr>
   <th scope="row">{i+1}</th>
   <td>{item.S_id}</td>
   <td>{item.S_name}</td>
   <td>{item.S_batch}</td>
   <td>{item.S_address}</td>
   <td>{item.S_dept}</td>
   <td>{item.S_bp}</td>
   
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
