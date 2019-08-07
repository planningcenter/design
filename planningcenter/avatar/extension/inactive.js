// TODO: inlined temporarily
import { mapPropsToClassNames } from "../../utilities/src/utilities";

export function getInactiveClassNames({ inactive }) {
  console.log(inactive);
  if (inactive) return "InactiveAvatar";

  return "";
}
