import React from "react";
import classnames from "classnames";
import {
  getResponsivePointGridClassNames,
  getPointGridClassNames,
  getStyledClassNames
} from "./avatar_extensions";
export * from "./avatar_extensions";

export function Avatar({ size, strict = true, inset, className, ...props }) {
  return (
    <Element
      className={classnames(
        className,
        getResponsivePointGridClassNames({ size }, strict),
        getPointGridClassNames({ size }, strict),
        getStyledClassNames({ inset }),
        "Avatar"
      )}
      {...props}
    />
  );
}

export function Element({ as: As = "span", src, alt, children, ...props }) {
  let imgProps = { src, alt };
  let img = <img {...imgProps} />;

  return (
    <As {...props}>
      {typeof children === "function" ? children(img, imgProps) : img}
    </As>
  );
}
