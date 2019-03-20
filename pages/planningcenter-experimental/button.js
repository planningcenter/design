import React from "react";
import Link from "next/link";
import "github-markdown-css";

// TODO: there seems to be a problem with the build
import { ComposedButton as Button } from "../../planningcenter-experimental/button/lib/button.mjs";
import "../../planningcenter-experimental/button/button.css";
import Readme from "../../planningcenter-experimental/button/README.md";

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
        <h2>Button</h2>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: 16
          }}
        >
          <Button
            onClick={() => alert("howdy")}
            action="put"
            height={6}
          >
            A Button
          </Button>
        </div>
      </section>

      <Readme />
    </div>
  );
}

export default Home;
