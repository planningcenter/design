import React from "react";
import * as ResourceHeader from "./resource-header";
import readme from "./README.md";
import "./resource-header.css";

import profileImage from "../../../../static/200x300_kitten.jpeg";

const {
  Tab,
  FlexSpacer,
  Title,
  SummaryContainer,
  TabContainer,
  Avatar,
  ActionGroup,
} = ResourceHeader;
function PlaceholderButton(props) {
  return <button href="#" type="button" style={{ height: 32 }} {...props} />;
}

export default {
  title: "Components|ResourceHeader",
  component: ResourceHeader,
  parameters: { notes: readme },
};

export const Spec = () => {
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <SummaryContainer>
        <div>
          <Avatar src={profileImage} alt="kitten" />
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

        <ActionGroup>
          <PlaceholderButton>Secondary Action</PlaceholderButton>
          <PlaceholderButton>Primary Action</PlaceholderButton>
        </ActionGroup>
      </TabContainer>
    </div>
  );
};

export const Simple = () => (
  <div style={{ backgroundColor: "orangered" }}>
    <SummaryContainer>
      <Title>A Kitty</Title>
      <FlexSpacer />
      <ActionGroup>
        <PlaceholderButton>Secondary Action</PlaceholderButton>
        <PlaceholderButton>Primary Action</PlaceholderButton>
      </ActionGroup>
    </SummaryContainer>
  </div>
);
