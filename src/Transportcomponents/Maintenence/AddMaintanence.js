import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Apiurl from "../../Apiurl";

export default function AddMaintanence() {

  const apiurl = Apiurl();
  const { user } = useParams();
  const navigate = useNavigate();
  const [busno, setbusno] = useState("");
  const [insfrom, setinsfrom] = useState("");
  const [insto, setinsto] = useState("");
  const [permit, setpermit] = useState("");
  const [pollution, setpollution] = useState("");
  const [repmain, setrepmain] = useState("");
  const [gas, setgas] = useState("");

  const [kmrun, setkmrun] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        busno: busno,
        insurance_from: insfrom,
        insurance_to: insto,
        permit: permit,
        pollution: pollution,
        repmain: repmain,
        gas: gas,
        km: kmrun,
      };
      const response = await axios.post(apiurl + "Erp-BusMaintenance/", formData);
      alert("Driver Added Sucessfully!");
      navigate(`/transport-dashboard/${user}`)
    } catch (e) {
      alert("Please Try again Later ", e);
    }
  };

  return (
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Add Maintenance</h6>
        <form onSubmit={submit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Bus No
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbusno(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Insurance
            </label>
            From
            <div className="col-sm-4">
              <input
                type="date"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setinsfrom(e.target.value)}
              />
            </div>{" "}
            To{" "}
            <div className="col-sm-4">
              <input
                type="date"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setinsto(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Permit
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setpermit(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Pollution
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setpollution(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Gas Filling
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setgas(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Repair/Maintenance
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setrepmain(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Km Run
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setkmrun(e.target.value)}
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
