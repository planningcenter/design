import React from "react";
import Link from "next/link";

// TODO: there seems to be a problem with the build
import { ComposedButton as Button } from "../../planningcenter-experimental/button/lib/button.mjs";
import "../../planningcenter-experimental/button/button.css";

function Home() {
  return (
    <div>
      <Link>
        <a href="/">Home</a>
      </Link>

      <h1>@planningcenter-experimental/button</h1>
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
    </div>
  );
}

export default Home;
