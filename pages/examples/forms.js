import React from "react";
import Layout from "../../pages_support/components-layout";
import { Sheet } from "../../pages_support/sheet";
import { Text, TextInput } from "../../planningcenter/components/";

/* draft */
import "../../planningcenter/select/select.css";
import { Select } from "../../planningcenter/select/select";
import "../../planningcenter/button/button.css";
import { PutButton } from "../../planningcenter/button/button";

// TODO: `height` Context?

export default function() {
  return (
    <Layout>
      <h1>Examples : Forms</h1>

      <Sheet display="flex" space={2} padding={3}>
        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Select
          </Text>
          <Select>
            <option>A Select</option>
          </Select>
        </label>

        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Text Input
          </Text>
          <TextInput defaultValue="A Text Input" />
        </label>

        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Button
          </Text>
          <PutButton>A Button</PutButton>
        </label>
      </Sheet>

      <Sheet display="flex" space={1} padding={3}>
        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Select
          </Text>
          <Select className="PointGridSelect--height_2.5">
            <option>A Select</option>
          </Select>
        </label>

        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Text Input
          </Text>
          <TextInput height={2.5} defaultValue="A Text Input" />
        </label>

        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Button
          </Text>
          <PutButton height={2.5}>A Button</PutButton>
        </label>
      </Sheet>

      <Sheet display="flex" space={2} padding={3}>
        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Select
          </Text>
          <Select className="PointGridSelect--height_5">
            <option>A Select</option>
          </Select>
        </label>

        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Text Input
          </Text>
          <TextInput height={5} defaultValue="A Text Input" />
        </label>

        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Button
          </Text>
          <PutButton height={5}>A Button</PutButton>
        </label>
      </Sheet>
    </Layout>
  );
}
