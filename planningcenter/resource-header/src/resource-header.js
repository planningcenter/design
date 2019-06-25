import React from "react";

export function TabContainer({ as: As = "div", className, ...props }) {
  return (
    <As
      className={["ResourceHeader__TabContainer", className].join(" ")}
      {...props}
    />
  );
}

export function SummaryContainer({ as: As = "div", className, ...props }) {
  return (
    <As
      className={["ResourceHeader__SummaryContainer", className].join(" ")}
      {...props}
    />
  );
}

export function FlexSpacer({ space, className, ...props }) {
  return (
    <div
      className={[className, "ResourceHeader__FlexSpacer"].join(" ")}
      style={space ? { margin: space * 4 } : null}
      {...props}
    />
  );
}

export function Title({ as: As = "span", className, ...props }) {
  return (
    <As className={["ResourceHeader__Title", className].join(" ")} {...props} />
  );
}

export function Tab({ target, className, children, style, ...props }) {
  return (
    <a
      className={[className, "ResourceHeader__Tab"].join(" ")}
      style={{
        ...(target
          ? {
              backgroundColor: "white",
              fontWeight: 700,
              color: "#000"
            }
          : {
              backgroundColor: "rgba(255,255,255, .8)",
              boxShadow: "inset 0 -6px 6px -8px rgba(0,0,0, .1)",
              fontWight: 400,
              color: "#400"
            }),
        ...style
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function Avatar({
  as: As = "span",
  src,
  alt,
  className,
  children,
  ...props
}) {
  let imgProps = { src, alt };
  let img = <img {...imgProps} />;

  return (
    <As className={[className, "ResourceHeader__Avatar"].join(" ")} {...props}>
      {typeof children === "function" ? children(img, imgProps) : img}
    </As>
  );
}
