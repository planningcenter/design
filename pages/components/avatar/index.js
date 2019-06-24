import React from "react";

import "../../../planningcenter/components/css/components.css";
import { Avatar } from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";

export default function() {
  return <Layout children={<Content />} />;
}

export function Content() {
  return (
    <React.Fragment>
      <h1>Avatar</h1>

      <section>
        <Avatar src="https://placekitten.com/200/300" />
      </section>

      <section>
        <h2>Sizes</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex"
          }}
        >
          <Avatar size={2.5} src="https://placekitten.com/200/300" />
          <Avatar size={3} src="https://placekitten.com/200/300" />
          <Avatar size={4} src="https://placekitten.com/200/300" />
          <Avatar size={5} src="https://placekitten.com/200/300" />
          <Avatar size={6} src="https://placekitten.com/200/300" />
          <Avatar size={7} src="https://placekitten.com/200/300" />
          <Avatar size={8} src="https://placekitten.com/200/300" />
          <Avatar size={9} src="https://placekitten.com/200/300" />
        </Sheet>
      </section>

      <section>
        <h2>Inset</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex",
            backgroundColor: "hsl(0, 0%, 60%)"
          }}
        >
          <Avatar inset size={9} src="https://placekitten.com/200/300" />
        </Sheet>
      </section>

      <section>
        <h2>Inactive</h2>
        <Sheet style={{ padding: "32px 40px", display: "flex" }}>
          <Avatar inactive size={9} src="https://placekitten.com/200/300" />
        </Sheet>
      </section>
    </React.Fragment>
  );
}
