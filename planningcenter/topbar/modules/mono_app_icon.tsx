import * as React from "react";
import * as AppSymbols from "./mono_app_symbols";

function Squircle({ color = "#fff", ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M10.008.045C2.047.045.056,2.036.056,10s1.991,9.952,9.952,9.952S19.96,17.959,19.96,10,17.969.045,10.008.045Z"
    />
  );
}

export function MonoAppIcon({
  appName,
  colors,
  style,
  size = 20,
  ...platformProps
}: {
  appName: string;
  colors: any; // TODO: shared type
  style?: any;
  size?: number;
}): JSX.Element {
  console.log(appName);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      role="img"
      aria-labelledby="title desc"
      style={{ display: "block", ...style }}
      {...platformProps}
    >
      <title id="title">Planning Center {appName} App Icon</title>

      <desc id="desc">
        An image symbolizing the Planning Center {appName} app.
      </desc>

      <Squircle />

      {AppSymbols[appName] ? (
        React.createElement(AppSymbols[appName], { color: colors.base0 })
      ) : (
        <div>appName not supported</div>
      )}
    </svg>
  );
}
