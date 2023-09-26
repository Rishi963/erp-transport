import React from "react";

import { useNavigate } from "react-router-dom";
import '../../css/transport.css';

export default function Breadcrumbs(Props) {
  let navigate = useNavigate();

  return (
    <div className="transportbc">
      <h6>:/{Props.bc}.</h6>
      <button
      className="btn btn-primary"
        onClick={() => {
          let path = Props.path;
          navigate(path);
        }}
      >
        Back
      </button>
    </div>
  );
}
