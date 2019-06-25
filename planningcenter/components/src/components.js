// TODO: should we lock to versions or direct source?
//       starting with source
import React from "react";
import classnames from "classnames";

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
      className={classnames(
        className,
        getResponsivePointGridClassNames({ size }, strict),
        getPointGridClassNames({ size }, strict),
        getStyledClassNames({ inset }),
        getInactiveClassNames({ inactive })
      )}
      {...props}
    />
  );
}

import {
  Text as TextElement,
  getFontScaleClassNames
} from "../../text/src/text";

export function Text({ fontSize, strict = true, className, ...props }) {
  return (
    <TextElement
      className={classnames(
        className,
        getFontScaleClassNames({ fontSize }),
        "Text"
      )}
      {...props}
    />
  );
}

import TextInputElement from "../../text-input/src/text-input";
import { getPointGridClassNames as getTextInputPointGridClassNames } from "../../text-input-extensions/point-grid/point-grid";

export function TextInput({ className, height, strict = true, ...props }) {
  return (
    <TextInputElement
      className={classnames(
        className,
        getTextInputPointGridClassNames({ height }, strict)
      )}
      {...props}
    />
  );
}
