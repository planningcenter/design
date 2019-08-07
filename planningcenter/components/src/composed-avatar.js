import React from "react";

import { Avatar as AvatarElement } from "../../avatar/src/avatar";

import {
  getResponsivePointGridClassNames,
  getPointGridClassNames
} from "../../avatar/extension/point-grid";
import { getStyledClassNames } from "../../avatar/extension/styled";
import { getInactiveClassNames } from "../../avatar/extension/inactive";

export function Avatar({
  size,
  strict = true,
  inactive = false,
  inset,
  className,
  ...props
}) {
  return (
    <AvatarElement
      className={[
        className,
        getResponsivePointGridClassNames({ size }, strict),
        getPointGridClassNames({ size }, strict),
        getStyledClassNames({ inset }),
        getInactiveClassNames(inactive)
      ].join(" ")}
      {...props}
    />
  );
}
