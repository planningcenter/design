// TODO: inlined temporarily
import { mapPropsToClassNames } from "../../utilities/src/utilities";
import { SIZES } from "../../avatar/src/avatar";
import { BREAKPOINTS } from "../../system/src/system";

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

// private

function getConstrainedSize(size, strict) {
  if (strict && !SIZES.includes(size)) return;

  return size;
}
