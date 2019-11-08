import React from "react";

export function Select({ as: As = "select", className, ...props }) {
  return <As className={[className, "Select"].join(" ")} {...props} />;
}
