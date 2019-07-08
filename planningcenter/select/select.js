import React from "react";

import { SIZES as SYSTEM_SIZES } from "../system/src/system";

export const SIZES = Array.from(
  new Set([2.5, ...SYSTEM_SIZES.filter(s => s >= 3 && s <= 5)])
).sort();

export function Select({ as: As = "select", className, ...props }) {
  return <As className={[className, "Select"].join(" ")} {...props} />;
}
