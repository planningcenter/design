import React from "react";
import Link from "next/link";
import "github-markdown-css";

// TODO: there seems to be a problem with the build
import Avatar from "../../twain/avatar/lib/avatar.mjs";
import "../../twain/avatar/avatar.css";
import Readme from "../../twain/avatar/README.md";

function Home() {
  return (
    <div
      className="markdown-body"
      style={{ maxWidth: "40em", padding: "2em 4em" }}
    >
      <Link>
        <a href="/">Home</a>
      </Link>

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

export default Home;
