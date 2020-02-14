import React from "react";
import { TextInput } from "./text-input";
import readme from "./README.md";
import "./text-input.css";
import "./extension/bare.css";

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
    <TextInput placeholder="Placeholder text" id="placeholder-example" />
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

function getBareClassNames(bare = "") {
  return bare || "BareTextInput";
}

function BareTextInput({ bare, className, ...props }) {
  return (
    <TextInput
      className={[className, getBareClassNames(bare)].join(" ")}
      {...props}
    />
  );
}

export const Bare = () => (
  <>
    <div style={{ border: "1px solid red" }}>
      <BareTextInput placeholder="bare input" />
    </div>
    The above input is "bare", the border style is being provided by a
    surrounding element.
  </>
);
