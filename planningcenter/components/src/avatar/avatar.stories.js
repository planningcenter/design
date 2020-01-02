import React from "react";
import { Avatar } from "./avatar";
import readme from "./README.md";
import "./avatar.css";

import image from "../../../../static/200x300_kitten.jpeg";

export default {
  title: "Components|Avatar",
  component: Avatar,
  parameters: { notes: readme },
};

export const Spec = () => <Avatar src={image} alt="kitten" />;

export const CSSVariables = () => (
  <Avatar style={{ "--Avatar--size": "64px" }} src={image} alt="kitten" />
);
