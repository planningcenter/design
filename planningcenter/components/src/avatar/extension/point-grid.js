import { mapPropsToClassNames } from "@planningcenter/utilities";
import { BREAKPOINTS } from "@planningcenter/system";

export function getPointGridClassNames({ size }, availableSizes) {
  if (availableSizes && !availableSizes.includes(size)) {
    return "";
  }

  return (
    typeof size !== "object" &&
    mapPropsToClassNames("PointGridAvatar")(["size"])({
      size
    })
  );
}

export function getResponsivePointGridClassNames(
  { size: incomingSizes },
  availableSizes
) {
  if (typeof incomingSizes !== "object" || incomingSizes === null) return;

  let size = {};

  Object.entries(incomingSizes).forEach(([bp, s]) => {
    if (!availableSizes) {
      return (size[bp] = s);
    }

    if (Object.keys(BREAKPOINTS).includes(bp) && availableSizes.includes(s)) {
      return (size[bp] = s);
    }

    return;
  });

  return mapPropsToClassNames("ResponsivePointGridAvatar")(["size"])({
    size: size
  });
}
