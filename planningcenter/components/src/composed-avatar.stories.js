import { storiesOf } from "@storybook/react";
import React from "react";
import { Avatar } from "./composed-avatar";
import "../css/components.css";
import imageFile from "../../../static/320x_kitten.jpeg";

const image = {
  src: imageFile,
  alt: "my image"
};

export default {
  title: "Components|Avatar"
};

export const avatar = () => <Avatar {...image} />;
