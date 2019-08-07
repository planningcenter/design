import React from "react";
// import "github-markdown-css";
import "../planningcenter/typeface/sans-serif.css";
import Link from "next/link";
import { Text } from "../planningcenter/components/src/components";
// import "../planningcenter/components/css/components.css";
// import "../planningcenter/system/css/system.css";
// import "../pages_support/page.css";
// import "../pages_support/github-markdown-css-overrides.css";

export default function(props) {
  return (
    <React.Fragment>
      <style jsx>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          .TwoColumnNavRightLayout {
            display: grid;
            grid-template-columns: 3fr 1fr;
            height: 100vh;
          }
          .TwoColumnNavRightLayout__Main {
            width: auto;
            max-width: 50em;
            padding: 2rem;
            background-color: #fafafa;
          }
          .TwoColumnNavRightLayout__Nav {
            width: auto;
            padding: 2rem;
          }
        `}
      </style>
      <div className="sans-serif TwoColumnNavRightLayout">
        <div className="TwoColumnNavRightLayout__Main">{props.children}</div>
        <div className="TwoColumnNavRightLayout__Nav">
          <section>
            <Text fontSize="medium" style={{ fontWeight: "bold" }}>
              Components
            </Text>

            <ul style={{ paddingLeft: "1.2em", listStyleType: "circle" }}>
              {[
                ["all", ""],
                "avatar",
                "checkbox",
                "resource-header",
                "select",
                "text",
                "text-input"
              ].map((component, i) => (
                <li key={i}>
                  {typeof component === "string" ? (
                    <Link href={`/components/${component}`}>
                      <a>{component}</a>
                    </Link>
                  ) : (
                    <Link href={`/components${component[1]}`}>
                      <a>{component[0]}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Text fontSize="medium" style={{ fontWeight: "bold" }}>
              Guides
            </Text>

            <ul style={{ paddingLeft: "1.2em", listStyleType: "circle" }}>
              {["extension", "philosophy", "entity-builder", "strategy"].map(
                (page, i) => (
                  <li key={i}>
                    <Link href={`/${page}`}>
                      <a>{page}</a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
