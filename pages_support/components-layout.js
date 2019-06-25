import React from "react";
// import "github-markdown-css";
import "../planningcenter/typeface/sans-serif.css";
import Link from "next/link";
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
          <ul>
            {[["all", ""], "avatar", "text"].map(component => (
              <li>
                <Link>
                  {typeof component === "string" ? (
                    <a href={`/components/${component}`}>{component}</a>
                  ) : (
                    <a href={`/components${component[1]}`}>{component[0]}</a>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
