import React from "react";

import "../../../planningcenter/components/css/components.css";
import {
  Text,
  TextInput,
  TEXT_INPUT_SIZES
} from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";

export default function() {
  return (
    <Layout>
      <h1>TextInput</h1>

      <section>
        <TextInput />
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
          <Preview />
        </Sheet>
      </section>
    </Layout>
  );
}

export function Preview() {
  return (
    <React.Fragment>
      {TEXT_INPUT_SIZES.map(height => (
        <React.Fragment>
          <TextInput height={height} placeholder={`height: ${height}`} />

          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
