// TODO: inlined temporarily
import { mapPropsToClassNames } from "@planningcenter/utilities";

export function getStyledClassNames({ inset }) {
  return mapPropsToClassNames("StyledAvatar")(["inset"])({
    inset
  });
}