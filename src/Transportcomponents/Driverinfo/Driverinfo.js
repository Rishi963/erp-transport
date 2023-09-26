import React from "react";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import axios from "axios";

import Apiurl from "../../Apiurl";
import "../../css/transport.css";

import { useParams } from "react-router-dom";
import Adddriverinfo from "./Adddriverinfo";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

export default function Driverinfo() {
  
  const apiurl = Apiurl();
  let Params = useParams();
  let navigate = useNavigate();

  const [driverData, setDriverData] = useState([]);
  async function deleteData(id) {
    if (window.confirm("Are you sure you want to Delete this?")) {
    try {
      const response = await axios.delete(apiurl+'Erp-Busdriverinfo/'+id+'/');
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
const fetchPost = async () => {
  try {
    const response = await axios.get(apiurl + "Erp-Busdriverinfo/");
    console.log(response.data);
    setDriverData(response.data);
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
      <Sidebarcomponent data={sidebardata} active={"Driver-info"} />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* table start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {Params.user == "Admin" ? <Adddriverinfo /> : null}
            <Breadcrumbs
              bc="Transport/Driver-info"
              path={
                Params.user == "Admin"
                  ? "/transport-dashboard/Admin"
                  : "/transport-dashboard/user"
              }
            />

            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Driver Info </h6>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sno</th>
                        <th scope="col">Driver_id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Blood_Group</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Licence_no</th>
                        <th scope="col"> Actions</th>

                      </tr>
                    </thead>
                    <tbody>
                      {driverData.map((item, i) => (
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td scope="col">{item.D_no}</td>
                          <td scope="col">{item.D_name}</td>
                          <td scope="col">{item.D_age}</td>
                          <td scope="col">{item.B_group}</td>
                          <td scope="col">{item.D_phone}</td>
                          <td scope="col">{item.D_address}</td>
                          <td scope="col">{item.D_licence}</td>
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
