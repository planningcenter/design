import React from "react";
import Link from "next/link";
import "github-markdown-css";

function Home() {
  return (
    <div
      className="markdown-body"
      style={{ maxWidth: "40em", padding: "2em 4em" }}
    >
      <h1>@planningcenter/design</h1>
      <ul>
        <li>
          <Link>
            <a href="/planningcenter/avatar">
              @planningcenter/avatar
            </a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="/planningcenter-experimental/button">
              @planningcenter-experimental/button
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
