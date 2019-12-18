import React from "react";

export function Avatar({
  as: As = "span",
  className,
  src,
  srcSet,
  alt,
  children,
  ...props
}) {
  let imgProps = { src, srcSet, alt };
  let img = <img {...imgProps} />;

  return (
    <As className={[className, "Avatar"].join(" ")} {...props}>
      {typeof children === "function" ? children(img, imgProps) : img}
    </As>
  );
}
