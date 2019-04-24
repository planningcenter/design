// TODO: inlined temporarily
import { mapPropsToClassNames } from "../../utilities/src/utilities";

export function getStatusClassNames({ status }) {
  return mapPropsToClassNames("StatusAvatar")(["status"])({
    status
  });
}
