import React from "react";
import classnames from "classnames";
import { UNSTABLE_getClassSelectorsFromProps as getClassSelectorsFromProps } from "@planningcenter/utilities";

// TODO: add ability to opt-out of base-class.
//       maybe a context-based scope?
// TODO: add check for inset
// export let insetSizes = sizes
//   .filter(size => ![2.5].includes(size))
//   .concat([undefined]);

let sizes = [2.5, 3, 4, 5, 6, 7, 8, 9];

export function ComposedAvatar({
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
      className={classnames(
        className,
        getClassSelectorsFromProps("StyledAvatar")([
          "inset"
        ])({
          inset
        }),
        typeof size === "object" &&
          size !== null && [
            "ResponsiveAvatar",
            getClassSelectorsFromProps(
              "ResponsiveScaledAvatar"
            )(["size"])({ size })
          ],
        typeof size !== "object" &&
          getClassSelectorsFromProps("ScaledAvatar")([
            "size"
          ])({
            size
          }),
        "Avatar"
      )}
      {...props}
    >
      {typeof children === "function"
        ? children(img, imgProps)
        : img}
    </As>
  );
}

export default ComposedAvatar;
