import React from "react";

import Link from "next/link";
import Layout from "../../pages_support/components-layout";
import { Sheet as SheetBase } from "../../pages_support/sheet";
import { Preview as AvatarPreview } from "./avatar";
import { Preview as TextPreview } from "./text";

import { Text } from "../../planningcenter/components/src/components";

function SectionHeader(props) {
  return <Text as="h2" {...props} />;
}

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
      <section style={{ marginTop: 40 }}>
        <SectionHeader>
          <Link>
            <a href="/components/avatar">Avatar</a>
          </Link>
        </SectionHeader>

        <Sheet>
          <AvatarPreview />
        </Sheet>
      </section>

      <section style={{ marginTop: 40 }}>
        <SectionHeader>
          <Link>
            <a href="/components/text">Text</a>
          </Link>
        </SectionHeader>
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
