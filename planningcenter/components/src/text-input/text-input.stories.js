import React from "react";
import { TextInput } from "./text-input";
import readme from "./README.md";
import "./text-input.css";

export default {
  title: "Components|TextInput",
  component: TextInput,
  parameters: { notes: readme },
};

export const Spec = () => <TextInput />;

export const Focused = () => (
  <>
    <label htmlFor="focused-example">Focus:</label>
    <br />
    <TextInput id="focus-example" autoFocus />
  </>
);

export const withPlaceholder = () => (
  <>
    <label htmlFor="placeholder-example">With Placeholder:</label>
    <br />
    <TextInput placeholder="Better placeholder" id="placeholder-example" />
  </>
);

export const Invalid = () => (
  <>
    <label htmlFor="validation-example">Invalid input: </label>
    <br />
    <TextInput
      required
      pattern="banana"
      placeholder="type 'banana'"
      id="validation-example"
    />
  </>
);
