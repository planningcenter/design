import React from "react";

export function HorizontalTabsContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "top"
      }}
      {...props}
    />
  );
}

export function SummaryContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 24,
        paddingBottom: 24
      }}
      {...props}
    />
  );
}

export function FlexSpacer({ space, ...props }) {
  return <div style={{ margin: space ? space * 4 : "auto" }} {...props} />;
}

export function PageTitle({ as: As = "span", style, ...props }) {
  return (
    <As
      style={{
        margin: 0,
        color: "white",
        fontSize: 22,
        fontWeight: 700,
        ...style
      }}
      {...props}
    />
  );
}

export function Tab({ target, children, style, ...props }) {
  return (
    <a
      style={{
        backgroundColor: target === true ? "white" : "rgba(255,255,255, .8)",
        boxShadow:
          target === true ? null : "inset 0 -6px 6px -8px rgba(0,0,0, .1)", // EDIT: added
        fontWeight: target === true ? 700 : 400,
        color: target === true ? "#000" : "#444",
        paddingRight: 24,
        paddingLeft: 24,
        marginRight: 8,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        lineHeight: "40px", // EDIT: reduced from 48px
        ...style
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function Container({ style, ...props }) {
  return (
    <div
      style={{
        flexDirection: "column",
        backgroundColor: "lightgray",
        paddingLeft: 24,
        paddingRight: 24,
        ...style
      }}
      {...props}
    />
  );
}