import React from "react";

import Link from "next/link";
import Layout from "../../pages_support/components-layout";
import { Sheet as SheetBase } from "../../pages_support/sheet";
import { Preview as AvatarPreview } from "./avatar";
import { Preview as TextPreview } from "./text";

function Sheet({ style, ...props }) {
  return (
    <SheetBase
      style={{
        padding: "32px 40px",
        display: "flex",
        ...style
      }}
      {...props}
    />
  );
}

export default function() {
  return (
    <Layout>
      <h1>Components</h1>
      <section>
        <h2>
          <Link>
            <a href="/components/avatar">Avatar</a>
          </Link>
        </h2>

        <Sheet>
          <AvatarPreview />
        </Sheet>
      </section>

      <section>
        <h2>
          <Link>
            <a href="/components/text">Text</a>
          </Link>
        </h2>
        <Sheet
          style={{
            flexDirection: "column"
          }}
        >
          <TextPreview />
        </Sheet>
      </section>
    </Layout>
  );
}
