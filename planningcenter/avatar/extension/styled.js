// TODO: inlined temporarily
import { mapPropsToClassNames } from "../../utilities/src/utilities";

export function getStyledClassNames({ inset }) {
  return mapPropsToClassNames("StyledAvatar")(["inset"])({
    inset
  });
}