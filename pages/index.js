import React from "react";
import Navigation from "../pages_support/navigation";
import "github-markdown-css";

function Home() {
  return (
    <div
      className="markdown-body"
      style={{ maxWidth: "40em", padding: "2em 4em" }}
    >
      <h1>@planningcenter/design</h1>
      <Navigation />
    </div>
  );
}

export default Home;
