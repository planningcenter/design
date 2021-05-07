import * as React from "react";
import pcoUrl, * as PCO_URL from "@planningcenter/url";

export function Avatar({
  env,
  url: incomingUrl = "",
  style,
  ...nativeProps
}: {
  env: PCO_URL.Environment;
  url?: string;
  style?: object;
}): JSX.Element {
  const url =
    incomingUrl ||
    `${pcoUrl(env)("people")}/static/no_photo_thumbnail_gray.svg`;

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "26px",
        width: "26px",
        marginLeft: "4px",
        borderRadius: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
        ...style,
      }}
      {...nativeProps}
    />
  );
}
