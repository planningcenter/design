import React from "react";
import { Text } from "./text";
import readme from "./README.md";
import getFontSizeClasses from "./extension/font-scale";

import "./text.css";
import "./extension/font-scale.css";
import "../../../typeface/sans-serif.css";

export default {
  title: "Components|Text",
  component: Text,
  parameters: { notes: readme },
};

export const Spec = () => <Text>Some context for Text…</Text>;

export const CSSVariables = () => (
  <>
    <Text style={{ "--Text--font-size": "10px" }}>10px: Use sparingly</Text>
    <br />
    <Text style={{ "--Text--font-size": "12px" }}>12px: De-emphasize</Text>
    <br />
    <Text style={{ "--Text--font-size": "14px" }}>14px: Base (compact)</Text>
    <br />
    <Text style={{ "--Text--font-size": "16px" }}>16px: Base</Text>
    <br />
    <Text style={{ "--Text--font-size": "18px" }}>18px: Very Large</Text>
  </>
);

export const FontScaleExtension = () => {
  let ExtText = ({ className, fontSize, ...props }) => (
    <Text
      className={[className, getFontSizeClasses({ fontSize })].join(" ").trim()}
      {...props}
    />
  );

  return (
    <>
      <ExtText fontSize="x-small">10px</ExtText>
      <br />
      <ExtText fontSize="small">12px</ExtText>
      <br />
      <ExtText fontSize="medium">14px</ExtText>
      <br />
      <ExtText fontSize="large">16px</ExtText>
      <br />
      <ExtText fontSize="x-large">18px</ExtText>
      <br />
    </>
  );
};
FontScaleExtension.story = {
  name: "extension: font-scale",
};
