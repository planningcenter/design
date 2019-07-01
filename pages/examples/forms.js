import React from "react";
import Layout from "../../pages_support/components-layout";
import { Sheet } from "../../pages_support/sheet";
import { Text, TextInput } from "../../planningcenter/components/";

export default function() {
  return (
    <Layout>
      <h1>Examples : Forms</h1>

      <Sheet display="flex" space={2} padding={3}>
        <label>
          <Text as="p" fontSize="small" style={{ fontWeight: "bold" }}>
            The Select
          </Text>
          <select>
            <option>A Select</option>
          </select>
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
          <button>A Button</button>
        </label>
      </Sheet>
    </Layout>
  );
}
