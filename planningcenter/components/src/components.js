// TODO: should we lock to versions or direct source?
//       starting with source
import React from "react";
import classnames from "classnames";

import {
  Avatar as AvatarElement,
  getResponsivePointGridClassNames,
  getPointGridClassNames,
  getStyledClassNames
} from "../../avatar/src/avatar";

export function Avatar({ size, strict = true, inset, className, ...props }) {
  return (
    <AvatarElement
      className={classnames(
        className,
        getResponsivePointGridClassNames({ size }, strict),
        getPointGridClassNames({ size }, strict),
        getStyledClassNames({ inset })
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

export function TextInput({ ...props }) {
  return <TextInputElement {...props} />;
}
