import React from "react";
import Link from "next/link";

// TODO: there seems to be a problem with the build
import Avatar from "../twain/avatar/lib/avatar.mjs";
import "../twain/avatar/avatar.css";

function Home() {
  return (
    <div>
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
