import React from "react";
import classnames from "classnames";
import {
  getResponsiveSizeClasses,
  getSizeClasses,
  getStyleClasses
} from "./avatar_extensions";
export * from "./avatar_extensions";

export function Avatar({ size, strict = true, inset, className, ...props }) {
  return (
    <Element
      className={classnames(
        className,
        getResponsiveSizeClasses({ size }, strict),
        getSizeClasses({ size }, strict),
        getStyleClasses({ inset }),
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
