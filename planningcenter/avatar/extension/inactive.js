// TODO: inlined temporarily
import { mapPropsToClassNames } from "../../utilities/src/utilities";

export function getInactiveClassNames({ inactive }) {
  if (inactive) return "InactiveAvatar";

  return "";
}
