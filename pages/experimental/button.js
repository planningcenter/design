import React from "react";

import Layout from "../../pages_support/layout";

// TODO: there seems to be a problem with the build
import {
  PutButton,
  CancelButton,
  DestroyButton,
  Button
} from "../../planningcenter/experimental/index";
import "../../planningcenter/experimental/css/experimental.css";

export default function() {
  return (
    <Layout>
      <section>
        <h2>Button</h2>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: 16
          }}
        >
          <Button onClick={() => alert("howdy")}>A Button</Button>

          <Button as="a" href="#">
            A Button (as="a")
          </Button>

          <Button as="input" value="A Button (as='a')" />

          <Button as="input" value="A Button (as='input/reset')" type="reset" />
          <Button
            as="input"
            value="A Button (as='input/submit')"
            type="submit"
          />

          <Button onClick={() => alert("howdy")}>
            A Button{" "}
            {/* TODO: extract this component for left and right usage */}
            <span style={{ marginLeft: 8, marginRight: -8 }}>🔽</span>
          </Button>
        </div>
      </section>
      <section>
        <h2>height</h2>
        <Button height={2.5}>height={2.5}</Button>
        <Button height={3}>height={3}</Button>
        <Button height={4}>height={4}</Button>
        <Button height={5}>height={5}</Button>
        <Button height={6}>height={6}</Button>
      </section>
      <section>
        <h2>Action buttons</h2>
        <PutButton>PutButton</PutButton>
        <DestroyButton>DestroyButton</DestroyButton>
        <CancelButton>CancelButton</CancelButton>
      </section>
    </Layout>
  );
}
