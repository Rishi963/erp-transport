import React from "react";
import { useNavigate } from "react-router-dom";

export default function Buttoncomp(props) {
  var icon = "fa " + props.icon + " fa-3x text-primary";
  
  const navigate = useNavigate();

  function navigatefunction() {
    let path = props.link;
    navigate(path);
  }
  return (
    <div className="col-sm-6 col-xl-3"   onClick={navigatefunction}>
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4" onClick={navigatefunction}>
        <i className={icon} onClick={navigatefunction} />
        <div className="ms-3" onClick={navigatefunction} >
          <h6 className="mb-0" onClick={navigatefunction} >{props.name}</h6>
        </div>
      </div>
    </div>
  );
}
