import React from "react";
import Navigation from "./navigation";
import "github-markdown-css";
import "../planningcenter/typeface/sans-serif.css";
import "../planningcenter/components/css/components.css";
import "../planningcenter/system/css/system.css";
import "../pages_support/page.css";
import "../pages_support/github-markdown-css-overrides.css";

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
          }
          .TwoColumnNavRightLayout__Nav {
            width: auto;
            background-color: #fafafa;
            padding: 2rem;
          }
        `}
      </style>
      <div className="sans-serif TwoColumnNavRightLayout">
        <div className="TwoColumnNavRightLayout__Main">{props.children}</div>
        <div className="TwoColumnNavRightLayout__Nav">
          <Navigation />
        </div>
      </div>
    </React.Fragment>
  );
}
