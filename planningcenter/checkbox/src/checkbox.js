import React from "react";

export const SIZES = [];

export function Checkbox({ className, children, ...props }) {
  // return (
  //   <div role="checkbox" aria-checked="false" tabindex="0" class="">
  //     {children}
  //   </div>
  // );
  return (
    <label>
      <input
        type="checkbox"
        className={[className, "Checkbox"].join(" ")}
        {...props}
      />
      <span style={{ marginLeft: 8 }}>{children}</span>
    </label>
  );
}
