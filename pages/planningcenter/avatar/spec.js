import React from "react";

import Layout from "../../../pages_support/layout";

import { Avatar, sizes } from "../../../planningcenter/avatar/src/avatar";

export default function() {
  return (
    <Layout>
      <section>
        <h1>Style</h1>
        <Avatar
          data-spec-style
          src="http://placekitten.com/200/300"
          alt="a cute kitten"
        />
      </section>
      <section>
        <h1>Sizes</h1>
        {sizes.map(size => (
          <Avatar
            data-spec-size={`${size * 8}px`}
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={size}
          />
        ))}
      </section>

      <section>
        <h1>Inset</h1>
        {sizes.map(size => (
          <Avatar
            data-spec-size-inset={`${size * 8}px`}
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={size}
            inset={true}
          />
        ))}
      </section>
    </Layout>
  );
}
