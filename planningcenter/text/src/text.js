import React from "react";

export const SIZES = Array.from(
  new Set(["x-small", "small", "medium", "large", "x-large"])
);

export function Text({ as: As = "span", className, ...props }) {
  return <As className={[className, "Text"].join(" ")} {...props} />;
}
