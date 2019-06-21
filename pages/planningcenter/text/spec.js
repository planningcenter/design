import React from "react";

import Layout from "../../../pages_support/layout";

import { Text } from "../../../planningcenter/components/src/components";
import { TYPE_SCALE } from "../../../planningcenter/system/src/system";

export default function() {
  return (
    <Layout>
      <section data-spec-group="size">
        <h1>Sizes</h1>
        {[
          ["x-small", [TYPE_SCALE[0]]],
          ["small", [TYPE_SCALE[1]]],
          ["medium", [TYPE_SCALE[2]]],
          ["large", [TYPE_SCALE[3]]],
          ["x-large", [TYPE_SCALE[4]]]
        ].map(([subjectiveSize, size]) => (
          <p>
            <Text data-spec-font-size={size} fontSize={subjectiveSize}>
              {size}
            </Text>
          </p>
        ))}
      </section>
    </Layout>
  );
}
