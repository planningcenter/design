import * as React from "react";
import { fontFamily } from "./styles";

export function Unbutton({
  style,
  ...nativeProps
}: {
  id?: string;
  style?: object;
  onClick?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onMouseDown?: any;
  onMouseUp?: any;
  children: any;
}): JSX.Element {
  return (
    <button
      style={{
        display: "inline-block",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        padding: 0,
        appearance: "none",
        WebkitAppearance: "none",
        outline: 0,
        ...fontFamily,
        ...style,
      }}
      {...nativeProps}
    />
  );
}
