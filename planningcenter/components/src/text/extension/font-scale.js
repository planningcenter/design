// TODO: inlined temporarily
import { mapPropsToClassNames } from "@planningcenter/utilities";

export function getFontScaleClassNames(
  { fontSize: incomingFontSize },
  strict = true
) {
  if (!incomingFontSize) return;

  let fontSize = getConstrainedSize(incomingFontSize, strict);

  return mapPropsToClassNames("FontScaleText")(["fontSize"])({
    fontSize
  });
}

// private

let subjectiveMap = ["x-small", "small", "medium", "large", "x-large"];

function getConstrainedSize(value, strict) {
  return strict ? (subjectiveMap.includes(value) ? value : "medium") : value;
}
