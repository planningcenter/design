import React from "react";
import Link from "next/link";
import Navigation from "./navigation";
import "github-markdown-css";
import "../planningcenter/typeface/sans-serif.css";
import "../planningcenter/components/css/components.css";

export default function(props) {
  return (
    <div className="sans-serif">
      <div>
        <Navigation />
      </div>
      <div>{props.children}</div>
    </div>
  );
}
