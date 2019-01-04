import React from "react";
import Avatar from "@twain/avatar";

function ResponsiveAvatar({ ...props }) {
  return <Avatar {...props} />;
}

export default ResponsiveAvatar;


function Thing() {
  return (


    <Avatar
      size={{ default: 3; md: 3; lg: 5 }}
      src="src.png"
      alt="alt text"
    />

    <Avatar
      size={3}
      sizeFrom={{ md: 4, lg: 5 }}
      src="src.png"
      alt="alt text"
    />

  )
}

// <ResponsiveAvatar
//   before={ sm: 3, lg: 5 }
//   src="src.png"
//   alt="alt text"
// />
// 
// <ResponsiveAvatar
//   for={ sm: 3, lg: 5 }
//   src="src.png"
//   size={4}
//   alt="alt text"
// />