import React from "react";
import classnames from "classnames";
import {
  getFontScaleClassNames,
  // getResponsiveFontScaleClassNames
} from "./text_extensions";
export * from "./text_extensions";

export function Text({ fontSize, strict = true, className, ...props }) {
  return (
    <Element
      className={classnames(
        className,
        // getResponsiveFontScaleClassNames({ fontSize }),
        getFontScaleClassNames({ fontSize }),
        "Text"
      )}
      {...props}
    />
  );
}

export function Element({ as: As = "span", ...props }) {
  return <As {...props} />;
}
