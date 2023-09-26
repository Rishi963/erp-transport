import React from "react";
import Navbarcomponent from "../../Components/Navbarcomponent/Navbarcomponent";
import Sidebarcomponent from "../../Components/Sidebarcomponent/Sidebarcomponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import axios from "axios";
import Apiurl from "../../Apiurl";

import AddMaintanence from "./AddMaintanence";

export default function Maintenance() {
  let Params = useParams();
  const apiurl = Apiurl();

  const [data, setdata] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(apiurl + "Erp-BusMaintenance/");
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  async function deleteData(id) {
    if (window.confirm("Are you sure you want to Delete this?")) {
      try {
        const response = await axios.delete(
          apiurl + "Erp-BusMaintenance/" + id + "/"
        );
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
  useEffect(() => {
    fetchPost();
  }, []);
  const sidebardata = [
    {
      tab: "Dashboard",
      link: "/transport-dashboard/" + Params.user,
    },
    {
      tab: "Student-Info",
      link: "/studentinfo/" + Params.user,
    },
    {
      tab: "Bus-Info",
      link: "/businfo/" + Params.user,
    },
    {
      tab: "Fee-Info",
      link: "/feeinfo/" + Params.user,
    },
    {
      tab: "Daily Report",
      link: "/dailyreport/" + Params.user,
    },
  ];
  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebarcomponent data={sidebardata} active={"Maintenence"} />

      <div className="content">
        {/* Navbar Start */}
        <Navbarcomponent />

        {/* Navbar End */}
        {/* table start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {Params.user == "Admin" ? <AddMaintanence /> : null}
            <Breadcrumbs
              bc="Transport/Maintenance"
              path={
                Params.user == "Admin"
                  ? "/transport-dashboard/Admin"
                  : "/transport-dashboard/user"
              }
            />

            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Maintenance</h6>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sno</th>
                        <th scope="col">Bus No</th>
                        <th scope="col"> Insurance</th>
                        <th scope="col"> Permit</th>
                        <th scope="col"> Pollution</th>
                        <th scope="col"> Gas Filling</th>
                        <th scope="col"> Repair/Maintenance</th>
                        <th scope="col"> Km</th>
                        <th scope="col"> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i) => (
                        <tr>
                          <th scope="row">{i + 1}</th>

                          <td scope="col">{item.busno}</td>
                          <td scope="col">
                            {item.insurance_from + "  to  " + item.insurance_to}
                          </td>
                          <td scope="col">{item.permit}</td>
                          <td scope="col">{item.pollution}</td>
                          <td scope="col">{item.gas}</td>
                          <td scope="col">{item.repmain}</td>
                          <td scope="col">{item.km}</td>
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

        {/* Footer End */}
      </div>
      {/* Content End */}
      {/* Back to Top */}
    </div>
  );
}
