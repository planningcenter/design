import React from "react";
import dynamic from "next/dynamic";

import Layout from "../../../pages_support/layout";

import * as SYSTEM from "../../../planningcenter/system/src/system";
import Readme from "../../../planningcenter/system/README.md";
import pkg from "../../../planningcenter/system/package.json";
import { Detail } from "../../../pages_support/package";

export default function() {
  return (
    <Layout>
      <div className="markdown-body">
        <Detail {...pkg} />
      </div>
    </Layout>
  );
}
