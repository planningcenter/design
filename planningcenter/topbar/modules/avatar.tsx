import * as React from "react";
import pcoUrl from "./pco_url";

export function Avatar({
  env,
  url: incomingUrl = "",
  style,
  ...nativeProps
}: {
  env: string;
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
