import { mapPropsToClassNames } from "../../utilities/src/utilities";

export const SIZES = Array.from(new Set([2.5, 3, 4, 5]));

export function getPointGridClassNames(
  { height: incomingHeight },
  strict = true
) {
  let height = getConstrainedSize(incomingHeight, strict);

  return (
    typeof height !== "object" &&
    mapPropsToClassNames("PointGridTextInput")(["height"])({
      height
    })
  );
}

// private
function getConstrainedSize(height, strict) {
  if (strict && !SIZES.includes(height)) return;

  return height;
}
