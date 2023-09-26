import React from "react";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Addfeeinfo from "./Addfeeinfo";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import axios from "axios";
import Apiurl from "../../Apiurl";

import Exportexcel from "../../Components/Excelexport/Excelexport";
import Excelimport from "../../Components/Excelexport/Excelimport";

export default function Feeinfo() {
 
  let Params = useParams();
  const apiurl = Apiurl();
  async function deleteData(id) {
    if (window.confirm("Are you sure you want to Delete this?")) {
    try {
      const response = await axios.delete(apiurl+'Erp-Busfee/'+id+'/');
      console.log(response.data);
      fetchPost();
      alert("Deleted Sucessfully !");
      // Handle the response data here
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  }
}

  const [data, setdata] = useState([]);
  const fetchPost = async () => {
    try {
      const response = await axios.get(apiurl + "Erp-Busfee/");
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const sidebardata = [
    {
      tab: "Dashboard",
      link: "/transport-dashboard/"+ Params.user,
    },
    {
      tab: "Student-Info",
      link: "/studentinfo/"+Params.user,
    },
    {
      tab: "Bus-Info",
      link: "/businfo/"+Params.user,
    },
    {
      tab: "Driver-Info",
      link: "/driverinfo/"+Params.user,
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
      <Sidebarcomponent data={sidebardata} active={"Fee-info"} />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* table start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {Params.user == "Admin" ? <Addfeeinfo /> : null}
            <Breadcrumbs
              bc="Transport/Fee-info"
              path={
                Params.user == "Admin"
                  ? "/transport-dashboard/Admin"
                  : "/transport-dashboard/user"
              }
            />

            <div className="col-12">
              {data != [] ? (
                <Exportexcel exceldata={data} fileName={"data"} />
              ) : null}

              {/* <Excelimport /> */}

              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Fee Info</h6>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sno</th>
                        <th scope="col">Route No</th>
                        <th scope="col">Boarding point</th>
                        <th scope="col">KM</th>
                        <th scope="col">Fee</th>
                        <th scope="col"> Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i) => (
                        <tr>
                          <th scope="row">{i + 1}</th>

                          <td scope="col">{item.R_no}</td>
                          <td scope="col">{item.B_point}</td>
                          <td scope="col">{item.Km}</td>
                          <td scope="col">{item.Fees}</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => {
                                deleteData(item.id);
                              }}
                              type="button"
                              className="btn btn-danger m-2"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
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
    </div>
  );
}
