import React from "react";
import Avatar from "@twain/avatar";

function ResponsiveAvatar({ sizeFrom = {}, ...props }) {
  return (
    <Avatar
      size={3}
      className={Object.entries({ md: 4, lg: 5 })
        .map(
          ([query, size]) =>
            `@${query}__Avatar--size_${size}`
        )
        .join(" ")
        .trim()}
      sizeFrom={{ md: 4, lg: 5 }}
      src="src.png"
      alt="alt text"
    />
  );
}

export default ResponsiveAvatar;
