import React from "react";

import "../../../planningcenter/components/css/components.css";
import { ResourceHeader } from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";

// TODO: change to import from local
const {
  Tab,
  FlexSpacer,
  Title,
  SummaryContainer,
  TabContainer,
  Avatar
} = ResourceHeader;
function PlaceholderButton(props) {
  return <button href="#" type="button" style={{ height: 32 }} {...props} />;
}

export default function() {
  return (
    <Layout>
      <h1>ResourceHeader</h1>

      <section>
        <Preview />
      </section>
    </Layout>
  );
}

export function Preview() {
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <SummaryContainer>
        <div>
          <Avatar src="/static/200x300_kitten.jpeg" />
        </div>
        <div>
          <Title>A Kitty</Title>
          <br />
          <span>555-555-01234</span>
          <span style={{ marginLeft: 8 }}>kitty@placeholder.net</span>
        </div>
      </SummaryContainer>
      <TabContainer>
        <Tab href="#" target>
          One
        </Tab>
        <Tab href="#">Two</Tab>
        <Tab href="#">Three</Tab>
        <FlexSpacer />
        <PlaceholderButton>Secondary Action</PlaceholderButton>
        <PlaceholderButton>Primary Action</PlaceholderButton>
      </TabContainer>
    </div>
  );
}
