import React from "react";
import classnames from "classnames";

export function TabContainer({
  as: As = "div",
  className,
  ...props
}) {
  return (
    <As
      className={classnames(
        "ResourceHeader__TabContainer",
        className
      )}
      {...props}
    />
  );
}

export function SummaryContainer({
  as: As = "div",
  className,
  ...props
}) {
  return (
    <As
      className={classnames(
        "ResourceHeader__SummaryContainer",
        className
      )}
      {...props}
    />
  );
}

export function FlexSpacer({ space, className, ...props }) {
  return (
    <div
      className={classnames(
        className,
        "ResourceHeader__FlexSpacer"
      )}
      style={space ? { margin: space * 4 } : null}
      {...props}
    />
  );
}

export function Title({
  as: As = "span",
  className,
  ...props
}) {
  return (
    <As
      className={classnames(
        "ResourceHeader__Title",
        className
      )}
      {...props}
    />
  );
}

export function Tab({
  target,
  className,
  children,
  style,
  ...props
}) {
  return (
    <a
      className={classnames(
        className,
        "ResourceHeader__Tab"
      )}
      style={{
        ...(target
          ? {
              backgroundColor: "white",
              fontWeight: 700,
              color: "#000"
            }
          : {
              backgroundColor: "rgba(255,255,255, .8)",
              boxShadow:
                "inset 0 -6px 6px -8px rgba(0,0,0, .1)",
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
    <As
      className={classnames(
        className,
        "ResourceHeader__Avatar"
      )}
      {...props}
    >
      {typeof children === "function"
        ? children(img, imgProps)
        : img}
    </As>
  );
}
