"use strict";
import React from "react";

function Avatar({ className, ...props }) {
  return (
    <img
      className={["avatar", className].join(" ")}
      {...props}
    />
  );
}

export default Avatar;
