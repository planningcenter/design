import React from "react";
import Link from "next/link";

let planningcenter = [
  "avatar",
  "button",
  "resource-header",
  "system",
  "text",
  "text-input"
];
let planningcenter_experimental = ["button"];

function OrganizationProjectList({
  as: As = "ul",
  items = [],
  renderItem = p => (
    <li>
      <Link>
        <a href={`/${p}`}>{p}</a>
      </Link>
    </li>
  ),
  ...props
}) {
  return <As {...props}>{items.map(renderItem)}</As>;
}

export default function() {
  return (
    <React.Fragment>
      <strong>@planningcenter</strong>
      <OrganizationProjectList items={planningcenter} />

      <strong>guides</strong>
      <OrganizationProjectList
        items={["extension", "philosophy", "entity-builder", "strategy"]}
        renderItem={p => (
          <li>
            <Link>
              <a href={`/${p}`}>{p}</a>
            </Link>
          </li>
        )}
      />
    </React.Fragment>
  );
}
