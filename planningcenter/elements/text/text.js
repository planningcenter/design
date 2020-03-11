import React from "react";

export function Text({ as: As = "span", ...props }) {
  return <As data-text {...props} />;
}
