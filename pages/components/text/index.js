import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";

import "../../../planningcenter/components/css/components.css";
import {
  Text,
  TEXT_SIZES as SIZES
} from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet as SheetBase } from "../../../pages_support/sheet";
import { ComponentDetailsTable } from "../../../pages_support/component-details-table";

function Sheet({ style, ...props }) {
  return (
    <SheetBase
      style={{
        padding: "32px 40px",
        display: "flex",
        ...style
      }}
      {...props}
    />
  );
}

import pkg from "../../../planningcenter/text/package.json";

export default function() {
  return (
    <Layout>
      <h1>Text</h1>
      <p>{pkg.description}</p>

      <section>
        <h2>Default</h2>

        <Text>{pkg.description}</Text>
      </section>
      <section>
        <h2>Scale</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Preview />
        </Sheet>
      </section>

      <section>
        <h2>Details </h2>

        <ComponentDetailsTable name="text" />
      </section>

      <section>
        <h2>Builder</h2>
        <Sheet>
          <div>
            <Builder />
          </div>
        </Sheet>
      </section>
    </Layout>
  );
}

export function Preview() {
  return SIZES.map(size => (
    <React.Fragment>
      <Text fontSize={size}>
        Here's some{" "}
        <strong>
          <code>{size}</code>
        </strong>{" "}
        text.
      </Text>
      <br />
    </React.Fragment>
  ));
}

function Builder() {
  let [children, updateChildren] = React.useState("This is your Text.");
  let [fontSize, updateFontSize] = React.useState("");
  let [output, updateOutput] = React.useState("react");

  let component = <Text fontSize={fontSize}>{children}</Text>;

  return (
    <React.Fragment>
      <div>
        <style>{`
          .form {
            display: grid;
            grid-template-columns: 150px 1fr;
          }
        `}</style>
        <form className="form">
          <label htmlFor="avatar-builder_children">Children</label>
          <input
            id="avatar-builder_children"
            type="text"
            value={children}
            onChange={e => updateChildren(e.target.value)}
          />

          <label htmlFor="avatar-builder_fontSize">fontSize</label>
          <select
            value={fontSize}
            onChange={e => {
              updateFontSize(e.target.value);
            }}
          >
            <option value="" key="none">
              default
            </option>
            {SIZES.map(size => (
              <option value={size} key={size}>
                {size}
              </option>
            ))}
          </select>

          <label htmlFor="avatar-builder_output">Output</label>

          <select
            id={`avatar-builder_output`}
            value={output}
            onChange={e => {
              updateOutput(e.target.value);
            }}
          >
            <option value="react">React</option>
            <option value="html">HTML</option>
          </select>
        </form>
      </div>

      <fieldset>
        <legend>example</legend>
        {component}
      </fieldset>

      <fieldset>
        <legend>{output}</legend>
        <pre style={{ overflow: "auto" }}>
          {output === "html" && (
            <code>{`${prettier.format(renderToStaticMarkup(component), {
              parser: "html",
              plugins: [htmlParser],
              printWidth: 34
            })}`}</code>
          )}

          {output === "react" && (
            <code>{`<Text${
              fontSize ? ` fontSize="${fontSize}" ` : ""
            }>${children}</Text>`}</code>
          )}
        </pre>
      </fieldset>
    </React.Fragment>
  );
}
