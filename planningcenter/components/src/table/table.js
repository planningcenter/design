import React from "react";

function getClassNames(className = "", defaultClassName = "") {
  return typeof className === "function"
    ? className(defaultClassName)
    : [className, defaultClassName].join(" ").trim();
}

export function Table({ as: As = "table", className, ...props }) {
  return <As className={getClassNames(className, "Table")} {...props} />;
}

export function Head({ as: As = "thead", className, ...props }) {
  return <As className={getClassNames(className, "Table__Head")} {...props} />;
}

export function Body({ as: As = "tbody", className, ...props }) {
  return <As className={getClassNames(className, "Table__Body")} {...props} />;
}

export function Row({ as: As = "tr", className, ...props }) {
  return <As className={getClassNames(className, "Table__Row")} {...props} />;
}

export function Data({ as: As = "td", className, ...props }) {
  return <As className={getClassNames(className, "Table__Data")} {...props} />;
}
