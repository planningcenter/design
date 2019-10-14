import React from "react";

import TextInputElement from "../../text-input/src/text-input";
import { getPointGridClassNames } from "../../text-input/extension/point-grid";
import { getInvalidClassNames } from "../../text-input/extension/invalid";

export function TextInput({
  className,
  height,
  invalid,
  strict = true,
  ...props
}) {
  return (
    <TextInputElement
      className={[
        className,
        getPointGridClassNames({ height }, strict),
        getInvalidClassNames({ invalid })
      ]
        .join(" ")
        .trim()}
      {...props}
    />
  );
}
