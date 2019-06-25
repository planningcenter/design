import React from "react";

import "../../../planningcenter/components/css/components.css";
import { Text } from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";

export default function() {
  return <Layout children={<Content />} />;
}

export function Content() {
  return (
    <React.Fragment>
      <h1>Text</h1>

      <section>
        <Text data-spec="default">Here's some text.</Text>
      </section>

      <section>
        <h2>Scale</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {["x-small", "small", "medium", "large", "x-large"].map(size => (
            <React.Fragment>
              <Text fontSize={size}>
                Here's some{" "}
                <strong>
                  <code>{size}</code>
                </strong>{" "}
                text.
              </Text>
              <br />
            </React.Fragment>
          ))}
        </Sheet>
      </section>
    </React.Fragment>
  );
}
