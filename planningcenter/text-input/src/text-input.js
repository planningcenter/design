import React from "react";

export default function TextInput({ as: As = "input", className, ...props }) {
  return (
    <As className={["TextInput", className].join(" ").trim()} {...props} />
  );
}
TextInput.defaultProps = { type: "text" };
