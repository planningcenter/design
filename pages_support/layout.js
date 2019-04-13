import React from "react";
import Link from "next/link";
import Navigation from "./navigation";
import "github-markdown-css";

export default function(props) {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>{props.children}</div>
    </div>
  );
}
