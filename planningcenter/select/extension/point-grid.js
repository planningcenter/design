import { mapPropsToClassNames } from "../../utilities/src/utilities";
import { SIZES } from "../select";

export function getPointGridClassNames(
  { height: incomingHeight },
  strict = true
) {
  let height = getConstrainedSize(incomingHeight, strict);

  return (
    typeof height !== "object" &&
    mapPropsToClassNames("PointGridSelect")(["height"])({
      height
    })
  );
}

// private
function getConstrainedSize(height, strict) {
  if (strict && !SIZES.includes(height)) return;

  return height;
}
