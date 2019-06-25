import React from "react";

import Layout from "../../pages_support/components-layout";
import { Content as AvatarContent } from "./avatar";
import { Content as TextContent } from "./text";

export default function() {
  return (
    <Layout>
      <AvatarContent />
      <TextContent />
    </Layout>
  );
}
