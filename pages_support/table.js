import React from "react";

export function Table(props) {
  return (
    <React.Fragment>
      <style>
        {`
          .table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          .table td {
            border: 1px solid #dfe2e5;
            padding: 7px 15px;
          }`}
      </style>
      <table className="table" {...props} />
    </React.Fragment>
  );
}
