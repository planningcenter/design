import React from "react";

import "../../../planningcenter/components/css/components.css";
import {
  Checkbox,
  CHECKBOX_SIZES
} from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";

export default function() {
  return (
    <Layout>
      <h1>Checkbox</h1>

      <section>
        <Checkbox>Test</Checkbox>
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
          <Checkbox className="PointGridCheckbox--size_1.5">size: 1.5</Checkbox>
          <br />
          <Checkbox className="PointGridCheckbox--size_2">size: 2</Checkbox>
          <br />
          <Checkbox className="PointGridCheckbox--size_2.5">size: 2.5</Checkbox>
        </Sheet>
      </section>
    </Layout>
  );
}

function useCheckboxState(initial = false) {
  let [value, updateValue] = React.useState(initial);
  return { value, onChange: () => updateValue(!value) };
}
export function Preview() {
  let first = useCheckboxState();
  let second = useCheckboxState();

  return (
    <React.Fragment>
      <Checkbox {...first}>Test</Checkbox>
      <br />
      <Checkbox {...second}>Test</Checkbox>
    </React.Fragment>
  );
}
