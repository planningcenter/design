import React from "react";

export function Table({ as: As = "table", ...props }) {
  return <As data-table {...props} />;
}

export function Head({ as: As = "thead", ...props }) {
  return <As data-table-head {...props} />;
}

export function Body({ as: As = "tbody", ...props }) {
  return <As data-table-body {...props} />;
}

export function Row({ as: As = "tr", ...props }) {
  return <As data-table-row {...props} />;
}

export function Data({ as: As = "td", ...props }) {
  return <As data-table-data {...props} />;
}
