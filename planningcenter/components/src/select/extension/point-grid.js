import { mapPropsToClassNames } from "@planningcenter/utilities";

export function getPointGridClassNames({ height }, availableSizes) {
  if (availableSizes && !availableSizes.includes(height)) {
    return "";
  }

  return (
    typeof height !== "object" &&
    mapPropsToClassNames("PointGridSelect")(["height"])({
      height
    })
  );
}
