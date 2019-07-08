import React from "react";

import { Select as SelectElement } from "../../select/select";
import { getPointGridClassNames } from "../../select/extension/point-grid";

export function Select({
  className,
  height,
  invalid,
  strict = true,
  ...props
}) {
  return (
    <SelectElement
      className={[className, getPointGridClassNames({ height }, strict)].join(
        " "
      )}
      {...props}
    />
  );
}
