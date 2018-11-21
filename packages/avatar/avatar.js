import React from "react";

export let sizes = [3, 4, 5, 6, 7, 8, 9, "20px", "profile"];

export let insetSizes = sizes
  .filter(size => !["20px"].includes(size))
  .concat([undefined]);

export function getBoundSize(sizes) {
  return function(size) {
    function logDevWarning(additionalMesage) {
      process.env.NODE_ENV !== "production" &&
        console.warn(
          `Avatar size not available.
Use one of these values: ${sizes.join(", ")}.
${additionalMesage}.
`
        );
    }

    if (!size) return 4;

    if (sizes.includes(size)) return size;

    if (size < 3) {
      logDevWarning("Using lowest value: 3");
      return 3;
    }

    if (size > 9) {
      logDevWarning("Using highest value: 9");
      return 9;
    }

    logDevWarning("Using value: 4");
    return 4;
  };
}

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
        inset && insetSizes.includes(size) && "Avatar--inset_true",
        `Avatar--size_${getBoundSize(sizes)(size)}`
      ].join(" ")}
      {...props}
    >
      {typeof children === "function" ? children(img) : img}
    </As>
  );
}

export default Avatar;
