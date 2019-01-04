import * as React from "react";

export function StyledRoot({ children, style, ...nativeProps }): JSX.Element {
  return (
    <div
      className="simple"
      style={{
        height: "48px",
        display: "flex",
        position: "relative",
        alignItems: "center",
        color: "white",
        fontFamily: "Lato",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        ...style,
      }}
      {...nativeProps}
    >
      <style>{`
      @media only print {
        .simple {
          display: none !important;
        }
      }
    `}</style>
      {children}
    </div>
  );
}
