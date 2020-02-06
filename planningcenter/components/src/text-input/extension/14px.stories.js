import React from "react";
import { TextInput } from "../text-input";
import readme from "../README.md";
import "../text-input.css";
// import "./14px.css";

export default {
  title: "Components|TextInput/Extensions|14px",
  component: TextInput,
  parameters: { notes: readme },
};

export const Fourteen = () => <TextInput />;
