import React from "react";

import Layout from "../../../pages_support/layout";

import { Avatar } from "../../../planningcenter/components/src/components";

import { SIZES } from "../../../planningcenter/avatar/src/avatar";

export default function() {
  return (
    <Layout>
      <style jsx>{`
        :root {
          --planningcenter-avatar-inset-color: lightgray;
        }
      `}</style>
      <section>
        <h1>Style</h1>
        <Avatar
          data-spec-style
          src="/static/200x300_kitten.jpeg"
          alt="a cute kitten"
        />
      </section>
      <section data-spec-group="size">
        <h1>Sizes</h1>
        {SIZES.map(size => (
          <Avatar
            data-spec-size={`${size * 8}px`}
            src="/static/200x300_kitten.jpeg"
            alt="a cute kitten"
            size={size}
          />
        ))}
      </section>

      <section>
        <h1>Inset</h1>
        {SIZES.map(size => (
          <Avatar
            data-spec-size-inset={`${size * 8}px`}
            src="/static/200x300_kitten.jpeg"
            alt="a cute kitten"
            size={size}
            inset={true}
          />
        ))}
      </section>
    </Layout>
  );
}
