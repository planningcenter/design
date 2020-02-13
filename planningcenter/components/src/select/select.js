import React from "react";
import { delegateDefaultClassName as cn } from "../../../utilities/src/utilities";

export function Select({ as: As = "select", className, ...props }) {
  return <As className={cn(className, "Select")} {...props} />;
}
