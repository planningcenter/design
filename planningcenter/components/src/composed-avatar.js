import React from "react";
import PropTypes from "prop-types";

import { Avatar as AvatarElement } from "./avatar/avatar";
import { SIZES as SYSTEM_SIZES } from "@planningcenter/system";

export const SIZES = Array.from(
  new Set([2.5, ...SYSTEM_SIZES.filter(s => s >= 3), 9])
).sort();

import {
  getResponsivePointGridClassNames,
  getPointGridClassNames
} from "./avatar/extension/point-grid";
import { getStyledClassNames } from "./avatar/extension/styled";
import { getInactiveClassNames } from "./avatar/extension/inactive";

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
      ]
        .join(" ")
        .trim()}
      {...props}
    />
  );
}

Avatar.propTypes = {
  as: PropTypes.element,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  inset: PropTypes.bool,
  size: PropTypes.oneOf([2.5, 3, 4, 5, 6, 7, 8, 9]),
  src: PropTypes.string,
  srcSet: PropTypes.string,
  strict: PropTypes.bool,
  alt: PropTypes.string,
  chidren: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
