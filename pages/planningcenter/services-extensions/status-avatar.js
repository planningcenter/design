import React from "react";
import Layout from "../../../pages_support/layout";
import classnames from "classnames";

import { Avatar as AvatarBase } from "../../../planningcenter/components/src/components";
import { getStatusClassNames } from "../../../planningcenter/services-extensions/src/services-extensions";
import "../../../planningcenter/services-extensions/css/services-extensions.css";

function Avatar({ className, status, ...props }) {
  return (
    <AvatarBase
      className={classnames(className, getStatusClassNames({ status }))}
      {...props}
    />
  );
}

export default function() {
  return (
    <Layout>
      <section>
        <h1>Status Avatar</h1>
        {["pending", "accepted", "declined"].map(status => (
          <Avatar
            status={status}
            src="/static/200x300_kitten.jpeg"
            alt="a cute kitten"
            size={6}
          />
        ))}
      </section>
    </Layout>
  );
}
