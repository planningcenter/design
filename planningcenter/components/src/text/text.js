import React from "react";

export function Text({ as: As = "span", className, ...props }) {
  return <As className={[className, "Text"].join(" ")} {...props} />;
}
