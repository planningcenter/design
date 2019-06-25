import React from "react";
import classnames from "classnames";
export * from "./text_extensions";

// export const TEXT_SIZES = Array.from(
//   new Set(["x-small", "small", "medium", "large", "x-large"])
// ).sort();

export function Text({ as: As = "span", className, ...props }) {
  return <As className={classnames(className, "Text")} {...props} />;
}
