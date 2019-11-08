import { mapPropsToClassNames } from "../../../../utilities/src/utilities";
import { SIZES } from "../../composed-text-input"; // TODO: shouldn't have to reach out for this. compose `strict` mode

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
