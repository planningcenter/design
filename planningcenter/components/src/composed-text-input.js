import React from "react";

import { TextInput as TextInputElement } from "./text-input/text-input";
import { getPointGridClassNames } from "./text-input/extension/point-grid";
import { getInvalidClassNames } from "./text-input/extension/invalid";

import { SIZES as SYSTEM_SIZES } from "../../system/src/system";

export const SIZES = Array.from(
  new Set([2.5, ...SYSTEM_SIZES.filter(s => s >= 3 && s <= 5)])
).sort();

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
