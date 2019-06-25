import React from "react";

import { Text as TextElement } from "../../text/src/text";
import { getFontScaleClassNames } from "../../text/extension/font-scale";

export function Text({ fontSize, strict = true, className, ...props }) {
  return (
    <TextElement
      className={[className, getFontScaleClassNames({ fontSize })].join(" ")}
      {...props}
    />
  );
}
