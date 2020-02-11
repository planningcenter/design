import React from "react";
import { Table, Body, Head, Row, Data } from "./table";
import readme from "./README.md";

import "./table.css";
import "../../../typeface/sans-serif.css";

export default {
  title: "Components|Table",
  component: Table,
  parameters: { notes: readme },
};

function Subject(props) {
  return (
    <Table {...props}>
      <Head>
        <Row>
          <Data>One</Data>
          <Data>Two</Data>
          <Data>Three</Data>
        </Row>
      </Head>

      <Body>
        <Row>
          <Data>First</Data>
          <Data>Second</Data>
          <Data>Third</Data>
        </Row>
        <Row>
          <Data>First</Data>
          <Data>Second</Data>
          <Data>Third</Data>
        </Row>
        <Row>
          <Data>First</Data>
          <Data>Second</Data>
          <Data>Third</Data>
        </Row>
      </Body>
    </Table>
  );
}
export const Spec = () => (
  <div className="sans-serif">
    <Subject />
  </div>
);

export const TableBorderRadius = () => (
  <div className="sans-serif">
    <Subject style={{ "--Table--border-radius": "4px" }} />
  </div>
);
TableBorderRadius.story = {
  name: "--Table--border-radius",
};

export const TableFontSize = () => (
  <div className="sans-serif">
    <Subject style={{ "--Table--font-size": "1rem" }} />
    <br />
    <Subject style={{ "--Table--font-size": "1.5rem" }} />
  </div>
);
TableFontSize.story = {
  name: "--Table--font-size",
};
