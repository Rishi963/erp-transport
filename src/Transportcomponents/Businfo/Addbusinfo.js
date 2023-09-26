import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Apiurl from "../../Apiurl";

export default function Addbusinfo() {
  const apiurl = Apiurl();
  const [rno, setrno] = useState("");
  const [rname, setrname] = useState("");
  const [btime, setbtime] = useState("");
  const [dtime, setdtime] = useState("");
  const [bp1, setbp1] = useState("");
  const [bp2, setbp2] = useState("");
  const [bp3, setbp3] = useState("");
  const [bp4, setbp4] = useState("");
  const [bp5, setbp5] = useState("");
  const [bp6, setbp6] = useState("");
  const [bp7, setbp7] = useState("");
  const [bp8, setbp8] = useState("");
  const [bp9, setbp9] = useState("");
  const [bp10, setbp10] = useState("");
  
  const { user } = useParams();
  const navigate = useNavigate();

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        R_no: rno,
        R_name: rname,
        B_time: btime,
        D_time: dtime,
        Bp_1: bp1,
        Bp_2: bp2,
        Bp_3: bp3,
        Bp_4: bp4,
        Bp_5: bp5,
        Bp_6: bp6,
        Bp_7: bp7,
        Bp_8: bp8,
        Bp_9: bp9,
        Bp_10: bp10,
      };
      const response = await axios.post(apiurl + "ERP-Businfo/", formData);
      
      navigate(`/transport-dashboard/${user}`)
      alert(" Added Sucessfully!");
    } catch (e) {
      alert("Please Try again Later ", e);
    }
  };

  return (
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Add Bus Info</h6>
        <form onSubmit={addTodo}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Route No
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setrno(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Route Name
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setrname(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Time
            </label>
            <div className="col-sm-10">
              <input
                required
                type="time"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbtime(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Dept Time
            </label>
            <div className="col-sm-10">
              <input
                required
                type="time"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setdtime(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 1
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp1(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 2
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp2(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 3
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp3(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 4
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp4(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 5
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp5(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 6
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp6(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 7
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp7(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 8
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp8(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 9
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp9(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point 10
            </label>
            <div className="col-sm-10">
              <input
                required
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp10(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
