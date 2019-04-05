import React from "react";
import classnames from "classnames";
// TODO: inlined temporarily
import { UNSTABLE_getClassSelectorsFromProps as getClassSelectorsFromProps } from "../../planningcenter/utilities";

// TODO: add ability to opt-out of base-class.
//       maybe a context-based scope?
// TODO: add check for inset
// export let insetSizes = sizes
//   .filter(size => ![2.5].includes(size))
//   .concat([undefined]);

let breakpoints = ["mn", "xs", "sm", "md", "lg", "xl"];

export let sizes = [2.5, 3, 4, 5, 6, 7, 8, 9];

export function getStyledClasses({ inset }) {
  return getClassSelectorsFromProps("StyledAvatar")([
    "inset"
  ])({
    inset
  });
}

export function getResponsiveScaledClasses(
  { size: incomingSizes },
  strict = true
) {
  if (
    typeof incomingSizes !== "object" ||
    incomingSizes === null
  )
    return;

  let size = {};

  Object.entries(incomingSizes).forEach(([bp, s]) => {
    if (!strict) {
      return (size[bp] = s);
    }

    if (breakpoints.includes(bp) && sizes.includes(s)) {
      return (size[bp] = s);
    }

    return;
  });

  return getClassSelectorsFromProps(
    "ResponsiveScaledAvatar"
  )(["size"])({ size: size });
}

export function getScaledClasses(
  { size: incomingSize },
  strict = true
) {
  let size = getConstrainedSize(incomingSize, strict);

  return (
    typeof size !== "object" &&
    getClassSelectorsFromProps("ScaledAvatar")(["size"])({
      size
    })
  );
}

function getConstrainedSize(size, strict) {
  if (strict && !sizes.includes(size)) {
    return;
  }

  return size;
}

export function ComposedAvatar({
  as: As = "span",
  size,
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

  return (
    <As
      className={classnames(
        className,
        getResponsiveScaledClasses({ size }, strict),
        getScaledClasses({ size }, strict),
        getStyledClasses({ inset }),
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
