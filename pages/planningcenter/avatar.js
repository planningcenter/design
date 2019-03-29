import React from "react";
import Link from "next/link";
import "github-markdown-css";

import { ComposedAvatar as Avatar } from "../../twain/avatar";
import "../../twain/avatar/avatar.css";
import Readme from "../../twain/avatar/README.md";
import pkg from "../../twain/avatar/package.json";
import { Detail } from "../../pages_support/package";

export default function() {
  return (
    <div
      className="markdown-body"
      style={{ maxWidth: "40em", padding: "2em 4em" }}
    >
      <Link>
        <a href="/">Home</a>
      </Link>

      <Detail {...pkg} />

      <section>
        <h2>Avatar</h2>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: 16
          }}
        >
          <span onClick={() => alert("tada!")}>
            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={8}
              inset={true}
            />
          </span>
        </div>
      </section>

      <Readme />
    </div>
  );
}
