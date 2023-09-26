import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Apiurl from "../../Apiurl";

export default function AddDailyreport() {

  const { user } = useParams();
  const navigate = useNavigate();
  const apiurl = Apiurl();
  const [routeno, setbp] = useState("");
  const [time, setkm] = useState("");
  const [stdcount, setfee] = useState("");
  const [staffcount, setrno] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        routeno: routeno,
        time: time,
        stdcount: stdcount,
        staffcount: staffcount,
      };
      const response = await axios.post(apiurl + "ERP-Busdailyreport/", formData);
      alert(" Added Sucessfully!");
      
      navigate(`/transport-dashboard/${user}`)
    } catch (e) {
      alert("Please Try again Later ", e);
    }
  };

  return (
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Add Daily Report</h6>
        <form onSubmit={submit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Route NO
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbp(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Time
            </label>
            <div className="col-sm-10">
              <input
                type="time"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setkm(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Student Count
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setfee(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Staff Count
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setrno(e.target.value)}
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
