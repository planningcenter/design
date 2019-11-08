import React from "react";

import { Select as SelectElement } from "./select/select";
import { getPointGridClassNames } from "./select/extension/point-grid";
import { SIZES as SYSTEM_SIZES } from "@planningcenter/system";

export const SIZES = Array.from(
  new Set([2.5, ...SYSTEM_SIZES.filter(s => s >= 3 && s <= 5)])
).sort();

export function Select({
  className,
  height,
  invalid,
  strict = true,
  ...props
}) {
  return (
    <SelectElement
      className={[
        className,
        getPointGridClassNames({ height }, strict && SIZES)
      ].join(" ")}
      {...props}
    />
  );
}
