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

export const Spec = () => (
  <div className="sans-serif">
    <Table>
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
  </div>
);
