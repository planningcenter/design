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
        <Avatar data-spec="default" src="https://placekitten.com/200/300" />
      </section>

      <section>
        <h2>Sizes</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex"
          }}
        >
          <Avatar
            data-spec="size:20px"
            size={2.5}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:24px"
            size={3}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:32px"
            size={4}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:40px"
            size={5}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:48px"
            size={6}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:56px"
            size={7}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:64px"
            size={8}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="size:72px"
            size={9}
            src="https://placekitten.com/200/300"
          />
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
          <Avatar
            data-spec="inset:0px"
            inset
            size={2.5}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:2px"
            inset
            size={3}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:2px"
            inset
            size={4}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:3px"
            inset
            size={5}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:3px"
            inset
            size={6}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:4px"
            inset
            size={7}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:4px"
            inset
            size={8}
            src="https://placekitten.com/200/300"
          />
          <Avatar
            data-spec="inset:5px"
            inset
            size={9}
            src="https://placekitten.com/200/300"
          />
        </Sheet>
      </section>

      <section>
        <h2>Inactive</h2>
        <Sheet style={{ padding: "32px 40px", display: "flex" }}>
          <Avatar
            data-spec="inactive"
            inactive
            size={9}
            src="https://placekitten.com/200/300"
          />
        </Sheet>
      </section>
    </React.Fragment>
  );
}
