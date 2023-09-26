import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Apiurl from "../../Apiurl";

export default function Addfeeinfo() {

  const apiurl = Apiurl();

  const { user } = useParams();
  const navigate = useNavigate();
  const [bp, setbp] = useState("");
  const [km, setkm] = useState("");
  const [fee, setfee] = useState("");
  const [Rno, setrno] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        B_point: bp,
        Km: km,
        Fees: fee,
        R_no: Rno,
      };
      const response = await axios.post(apiurl + "ERP-Busfee/", formData);

      alert("Driver Added Sucessfully!");
      
      navigate(`/transport-dashboard/${user}`)
    } catch (e) {
      alert("Please Try again Later ", e);
    }
  };

  return (
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Add Fee Info</h6>
        <form onSubmit={submit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Boarding Point
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
              Km
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setkm(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Fee
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
              Route No
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
