import React from "react";
// import { renderToStaticMarkup } from "react-dom/server";
// import prettier from "prettier/standalone";
// import htmlParser from "prettier/parser-html";

import Layout from "../pages_support/layout";

import "../planningcenter/components/css/components.css";
import { TextInput } from "../planningcenter/components/src/components";

import pkg from "../planningcenter/text-input/package.json";
import { Detail } from "../pages_support/package";

function useInput(initialValue = "") {
  let [value, updateValue] = React.useState(initialValue);
  return { value, onChange: e => updateValue(e.target.value) };
}

export default function() {
  let someInput = useInput();

  return (
    <Layout>
      <div>
        <Detail componentName="TextInput" {...pkg} />

        <br />
        <br />

        <TextInput {...someInput} height={5} placeholder="Placeholder" />

        <br />
        <br />

        <TextInput {...someInput} height={4} placeholder="Placeholder" />

        <br />
        <br />

        <TextInput {...someInput} height={3} placeholder="Placeholder" />

        <br />
        <br />

        <TextInput {...someInput} height={2.5} placeholder="Placeholder" />
        <style>
          {`
          .show-css-custom-properties::after {
            content: '--screen-category : 'var(--type-scale_2);
          }
        `}
        </style>
        <div className="show-css-custom-properties" />
      </div>
    </Layout>
  );
}
