import React from "react";

// TODO: add ability to opt-out of base-class.
//       maybe a context-based scope?
// TODO: add check for inset
// export let insetSizes = sizes
//   .filter(size => ![2.5].includes(size))
//   .concat([undefined]);

let sizes = [2.5, 3, 4, 5, 6, 7, 8, 9];

export function Avatar({
  as: As = "span",
  size: incomingSize,
  strict = true,
  src,
  alt,
  inset,
  className,
  children,
  ...props
}) {
  let imgProps = { src, alt };
  let img = <img {...imgProps} />;

  let size = incomingSize;

  if (strict && !sizes.includes(incomingSize)) {
    size = null;
  }

  return (
    <As
      className={[
        "Avatar",
        inset && "Avatar--inset_true",
        size && `Avatar--size_${size}`
      ]
        .join(" ")
        .trim()}
      {...props}
    >
      {typeof children === "function"
        ? children(img, imgProps)
        : img}
    </As>
  );
}

export default Avatar;
