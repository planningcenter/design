import React from "react";

export function Select({ as: As = "select", ...props }) {
  return <As data-select {...props} />;
}

export function Option({ as: As = "option", ...props }) {
  return <As data-select-option {...props} />;
}
