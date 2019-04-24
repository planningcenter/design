import React from "react";
import classnames from "classnames";
export * from "./text_extensions";

export function Text({ as: As = "span", className, ...props }) {
  return <As className={classnames(className, "Text")} {...props} />;
}
