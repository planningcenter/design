// TODO: inlined temporarily
import { UNSTABLE_getClassSelectorsFromProps as getEntityClassesFromProps } from "../../utilities";
import { BREAKPOINTS } from "../../system/src/system.js";

// TODO: add check for inset
// export let insetSizes = sizes
//   .filter(size => ![2.5].includes(size))
//   .concat([undefined]);

export let sizes = [2.5, 3, 4, 5, 6, 7, 8, 9];

export function getSizeClasses({ size: incomingSize }, strict = true) {
  let size = getConstrainedSize(incomingSize, strict);

  return (
    typeof size !== "object" &&
    getEntityClassesFromProps("ScaledAvatar")(["size"])({
      size
    })
  );
}

export function getResponsiveSizeClasses(
  { size: incomingSizes },
  strict = true
) {
  if (typeof incomingSizes !== "object" || incomingSizes === null) return;

  let size = {};

  Object.entries(incomingSizes).forEach(([bp, s]) => {
    if (!strict) {
      return (size[bp] = s);
    }

    if (Object.keys(BREAKPOINTS).includes(bp) && sizes.includes(s)) {
      return (size[bp] = s);
    }

    return;
  });

  return getEntityClassesFromProps("ResponsiveScaledAvatar")(["size"])({
    size: size
  });
}

export function getStyleClasses({ inset }) {
  return getEntityClassesFromProps("StyledAvatar")(["inset"])({
    inset
  });
}

// private

function getConstrainedSize(size, strict) {
  if (strict && !sizes.includes(size)) return;

  return size;
}
