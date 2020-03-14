import React from "react";

export function Surface({ as: As = "div", className, depth, ...props }) {
  return (
    <As
      className={["Surface", className]
        .concat(
          depth && [1, 2, 3].includes(depth) ? ["Surface--depth_" + depth] : []
        )
        .join(" ")
        .trim()}
      {...props}
    />
  );
}
