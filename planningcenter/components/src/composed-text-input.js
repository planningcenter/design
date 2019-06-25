import React from "react";

import TextInputElement from "../../text-input/src/text-input";
import { getPointGridClassNames } from "../../text-input/extension/point-grid";

export function TextInput({ className, height, strict = true, ...props }) {
  return (
    <TextInputElement
      className={[className, getPointGridClassNames({ height }, strict)].join(
        " "
      )}
      {...props}
    />
  );
}
