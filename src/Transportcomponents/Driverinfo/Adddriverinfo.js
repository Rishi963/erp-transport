import React, { useState, useEffect } from "react";
import { Routes, Route, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import Apiurl from "../../Apiurl";

export default function Adddriverinfo() {

  const apiurl = Apiurl();

  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [bg, setbg] = useState("");
  const [ph, setph] = useState("");
  const [address, setaddress] = useState("");
  const [licence, setlicence] = useState("");

  const { user } = useParams();
  const navigate = useNavigate();
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        D_no: id,
        D_name: name,
        D_age: age,
        B_group: bg,
        D_phone: ph,
        D_address: address,
        D_licence: licence,
      };
      const response = await axios.post(apiurl + "ERP-Busdriverinfo/", formData);

      alert("Driver Added Sucessfully!");
      
      navigate(`/transport-dashboard/${user}`)
    } catch (e) {
      alert("Please Try again Later ", e);
    }
  };

  return (
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Add Driver Info</h6>
        <form onSubmit={addTodo}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              ID
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                required
                onChange={(e) => setid(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Age
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setage(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Blood_Group
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setbg(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setph(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setaddress(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Licence No
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                onChange={(e) => setlicence(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
