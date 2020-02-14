import React from "react";
import readme from "./README.md";
import { TextInput } from "../text-input";
import "../text-input.css";

import { getBareClassNames } from "./bare";
import "./bare.css";

export default {
  title: "Components|TextInput/Extension",
  component: BareTextInput,
  parameters: { notes: readme },
};

function BareTextInput({ className, ...props }) {
  return (
    <TextInput
      className={[className, getBareClassNames(true)].join(" ")}
      {...props}
    />
  );
}

export const Bare = () => (
  <>
    <div style={{ border: "1px solid red", backgroundColor: "lightgray" }}>
      <BareTextInput placeholder="bare input" />
    </div>
    The above input is "bare", the border style is being provided by a
    surrounding element.
  </>
);
