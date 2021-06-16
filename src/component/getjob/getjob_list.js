import { findByLabelText } from "@testing-library/react";
import { Link } from "react-router-dom";
import React from "react";

const GetJob_List = (props) => {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #f0f0f0",
        paddingBottom: "5px",
        marginBottom: "10px",
      }}
    >
      <div>
        <div style={{ fontWeight: "bold" }}>
          <Link to={"/detail/" + props.id}>{props.title}</Link>
          <span style={{ color: "#16e616" }}> {props.type} </span>
        </div>
        <div style={{ color: "grey" }}>{props.company} </div>
      </div>
      <div style={{ marginLeft: "auto", textAlign: "right" }}>
        <div style={{ color: "grey" }}>{props.location} </div>
        <div style={{ color: "grey" }}>{props.date} </div>
      </div>
    </div>
  );
};

export default GetJob_List;
