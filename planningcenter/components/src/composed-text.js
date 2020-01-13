import React from "react";

import { Text as TextElement } from "./text/text";
import getFontScaleClassNames from "./text/extension/font-scale";

export const SIZES = Array.from(
  new Set(["x-small", "small", "medium", "large", "x-large"])
);

// TODO: add `strict` to getFontScaleClassNames, using SIZES

export function Text({ fontSize, strict = true, className, ...props }) {
  return (
    <TextElement
      className={[className, getFontScaleClassNames({ fontSize })].join(" ")}
      {...props}
    />
  );
}
