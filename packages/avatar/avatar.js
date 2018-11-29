import React from "react";

export let sizes = [3, 4, 5, 6, 7, 8, 9, "20px", "profile"];

export let insetSizes = sizes
  .filter(size => !["20px"].includes(size))
  .concat([undefined]);

export function Avatar({
  as: As = "span",
  size,
  src,
  alt,
  inset,
  className,
  children,
  ...props
}) {
  let img = <img src={src} alt={alt} />;

  return (
    <As
      className={[
        "Avatar",
        inset && "Avatar--inset_true",
        size && `Avatar--size_${size}`
      ].join(" ")}
      {...props}
    >
      {typeof children === "function" ? children(img) : img}
    </As>
  );
}

export default Avatar;
