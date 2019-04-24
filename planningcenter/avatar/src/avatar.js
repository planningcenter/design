import React from "react";
import classnames from "classnames";
export * from "./avatar_extensions";

export function Avatar({
  as: As = "span",
  className,
  src,
  alt,
  children,
  ...props
}) {
  let imgProps = { src, alt };
  let img = <img {...imgProps} />;

  return (
    <As className={classnames([className, "Avatar"])} {...props}>
      {typeof children === "function" ? children(img, imgProps) : img}
    </As>
  );
}
