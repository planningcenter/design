import React from "react";
import Link from "next/link";
import "github-markdown-css";

// TODO: there seems to be a problem with the build
import { ComposedButton as Button } from "../../planningcenter-experimental/button/dist/button.mjs";
import "../../planningcenter-experimental/button/button.css";
import Readme from "../../planningcenter-experimental/button/README.md";
import pkg from "../../planningcenter-experimental/button/package.json";
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

          <Button
            onClick={() => alert("howdy")}
            action="put"
            height={6}
          >
            A Button{" "}
            {/* TODO: extract this component for left and right usage */}
            <span
              style={{ marginLeft: 8, marginRight: -8 }}
            >
              🔽
            </span>
          </Button>
        </div>
      </section>

      <Readme />
    </div>
  );
}
