// TODO: inlined temporarily
import { mapPropsToClassNames } from "../../utilities/src/utilities";
import { BREAKPOINTS, SIZES as SYSTEM_SIZES } from "../../system/src/system.js";

export const SIZES = [2.5, ...SYSTEM_SIZES.filter(s => s >= 3), 9];

export function getPointGridClassNames({ size: incomingSize }, strict = true) {
  let size = getConstrainedSize(incomingSize, strict);

  return (
    typeof size !== "object" &&
    mapPropsToClassNames("PointGridAvatar")(["size"])({
      size
    })
  );
}

export function getResponsivePointGridClassNames(
  { size: incomingSizes },
  strict = true
) {
  if (typeof incomingSizes !== "object" || incomingSizes === null) return;

  let size = {};

  Object.entries(incomingSizes).forEach(([bp, s]) => {
    if (!strict) {
      return (size[bp] = s);
    }

    if (Object.keys(BREAKPOINTS).includes(bp) && SIZES.includes(s)) {
      return (size[bp] = s);
    }

    return;
  });

  return mapPropsToClassNames("ResponsivePointGridAvatar")(["size"])({
    size: size
  });
}

export function getStyledClassNames({ inset }) {
  return mapPropsToClassNames("StyledAvatar")(["inset"])({
    inset
  });
}

// private

function getConstrainedSize(size, strict) {
  if (strict && !SIZES.includes(size)) return;

  return size;
}
