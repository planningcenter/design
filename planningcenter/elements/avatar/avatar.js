import React from "react";

export function Avatar({
  as: As = "span",
  src,
  srcSet,
  alt,
  children,
  ...props
}) {
  let imgProps = { src, srcSet, alt };
  let img = <img {...imgProps} />;

  return (
    <As data-avatar {...props}>
      {typeof children === "function" ? children(imgProps) : img}
    </As>
  );
}
