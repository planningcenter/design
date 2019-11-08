import React from "react";

export function TextInput({ as: As = "input", className, ...props }) {
  return (
    <As className={[className, "TextInput"].join(" ").trim()} {...props} />
  );
}
TextInput.defaultProps = { type: "text" };
