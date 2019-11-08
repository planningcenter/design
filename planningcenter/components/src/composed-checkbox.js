import React from "react";

import { Checkbox as CheckboxElement } from "./checkbox/checkbox";

export const SIZES = [];

export function Checkbox({ ...props }) {
  return <CheckboxElement {...props} />;
}
