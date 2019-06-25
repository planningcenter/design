import React from "react";

import "../../../planningcenter/components/css/components.css";
import { Avatar } from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";

export default function() {
  return (
    <Layout>
      <h1>Avatar</h1>

      <section>
        <Avatar src="/static/200x300_kitten.jpeg" />
      </section>

      <section>
        <h2>Sizes</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex"
          }}
        >
          {[2.5, 3, 4, 5, 6, 7, 8, 9].map(size => (
            <Avatar size={size} src="/static/200x300_kitten.jpeg" />
          ))}
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
          {[2.5, 3, 4, 5, 6, 7, 8, 9].map(size => {
            let inset = size === 2.5 ? 0 : Math.round(size / 2);

            return (
              <Avatar inset size={size} src="/static/200x300_kitten.jpeg" />
            );
          })}
        </Sheet>
      </section>

      <section>
        <h2>Inactive</h2>
        <Sheet style={{ padding: "32px 40px", display: "flex" }}>
          <Avatar inactive size={9} src="/static/200x300_kitten.jpeg" />
        </Sheet>
      </section>
    </Layout>
  );
}

export function Preview() {
  return (
    <React.Fragment>
      {[2.5, 3, 4, 5, 6, 7, 8, 9].map(size => (
        <Avatar size={size} src="/static/200x300_kitten.jpeg" />
      ))}
    </React.Fragment>
  );
}
