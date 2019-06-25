import React from "react";
import { SIZES as SYSTEM_SIZES } from "../../system/src/system";

export const SIZES = Array.from(
  new Set([2.5, ...SYSTEM_SIZES.filter(s => s >= 3 && s <= 5)])
).sort();

export default function TextInput({ as: As = "input", className, ...props }) {
  return (
    <As className={[className, "TextInput"].join(" ").trim()} {...props} />
  );
}
TextInput.defaultProps = { type: "text" };
