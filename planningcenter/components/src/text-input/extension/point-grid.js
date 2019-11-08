import { mapPropsToClassNames } from "@planningcenter/utilities";

export function getPointGridClassNames({ height }, availableHeights) {
  if (availableHeights && !availableHeights.includes(height)) {
    return "";
  }

  return (
    typeof height !== "object" &&
    mapPropsToClassNames("PointGridTextInput")(["height"])({
      height
    })
  );
}
