import React from "react";
import Link from "next/link";

let planningcenter = ["avatar", "text", "resource-header"];
let planningcenter_experimental = ["button"];

function OrganizationProjectList({
  as: As = "ul",
  items = [],
  renderItem = p => (
    <li>
      <Link>
        <a href={`/planningcenter/${p}`}>{p}</a>
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

      <strong>@planningcenter-experimental</strong>
      <OrganizationProjectList
        items={planningcenter_experimental}
        renderItem={p => (
          <li>
            <Link>
              <a href={`/planningcenter-experimental/${p}`}>{p}</a>
            </Link>
          </li>
        )}
      />

      <strong>guides</strong>
      <OrganizationProjectList
        items={["extension"]}
        renderItem={p => (
          <li>
            <Link>
              <a href={`/guides/${p}`}>{p}</a>
            </Link>
          </li>
        )}
      />

      <strong>tools</strong>
      <OrganizationProjectList
        items={["entity-builder"]}
        renderItem={p => (
          <li>
            <Link>
              <a href={`/tools/${p}`}>{p}</a>
            </Link>
          </li>
        )}
      />

      <strong>other</strong>
      <OrganizationProjectList
        items={["philosophy"]}
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
