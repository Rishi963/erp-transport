import React from "react";
import Icon from "../../Images/email.png";

import  { useState, useEffect } from 'react';

export default function Message() {
  const [circulars, fetchcircular] = useState([]);
  const getData = () => {
    let url = "http://updateinterior.net/api/circular/";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        fetchcircular(res);
      });
  };
  const size = 3;
  const slz = circulars.reverse().slice(0, size);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-light rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h6 className="mb-0">Messages</h6>
          <a href="/">Show All</a>
        </div>
        {
  slz.map((item,i)=>(
   
      <div className="d-flex align-items-center border-bottom py-3">
          <img
            className="rounded-circle flex-shrink-0"
            src={Icon}
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
          <div className="w-100 ms-3">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-0">{item.title}</h6>
              <small>{item.dandt}</small>
              <small>{item.time}</small>
            </div>
            <span>{item.description}</span>
          </div>
        </div>
     
  
))
}
        
      </div>
    </div>
  );
}
