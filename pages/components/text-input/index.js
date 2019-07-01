import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";

import "../../../planningcenter/components/css/components.css";
import {
  Text,
  TextInput,
  TEXT_INPUT_SIZES as SIZES
} from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet } from "../../../pages_support/sheet";
import { ComponentDetailsTable } from "../../../pages_support/component-details-table";

import pkg from "../../../planningcenter/text-input/package.json";

export default function() {
  return (
    <Layout>
      <h1>TextInput</h1>
      <p>{pkg.description}</p>

      <section>
        <h2>Default</h2>
        <TextInput placeholder="Type something" />
      </section>

      <section>
        <h2>height</h2>
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
        <h2>invalid</h2>
        <Sheet
          style={{
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <label htmlFor="client-validation">
            <Text fontSize="small" style={{ lineHeight: "24px" }}>
              :invalid psuedo-class
            </Text>
          </label>
          <TextInput
            type="email"
            placeholder="type valid address"
            id="client-validation"
          />
          <br />

          <label htmlFor="classname-validation">
            <Text fontSize="small" style={{ lineHeight: "24px" }}>
              <code>invalid</code> prop/class
            </Text>
          </label>
          <TextInput invalid value="test@nope." id="classname-validation" />
        </Sheet>
      </section>

      <section>
        <h2>Details </h2>

        <ComponentDetailsTable name="text-input" />
      </section>

      <section>
        <h2>Builder</h2>

        <Builder />
      </section>

      <section>
        <h2>CSS Variables</h2>
        <pre style={{ padding: "0 16px" }}>
          <code>
            {`--TextInput--background-color
--TextInput--border-color
--TextInput--color
--TextInput--box-shadow`}
          </code>
        </pre>
      </section>
    </Layout>
  );
}

export function Preview() {
  return (
    <React.Fragment>
      {SIZES.map(height => (
        <React.Fragment>
          <TextInput height={height} placeholder={`height: ${height}`} />

          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

function Builder() {
  let [invalid, updateInvalid] = React.useState(false);
  let [height, updateHeight] = React.useState();
  let [output, updateOutput] = React.useState("react");

  let component = <TextInput height={parseFloat(height)} invalid={invalid} />;

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
          <label htmlFor="avatar-builder_height">height</label>
          <select
            value={height}
            onChange={e => {
              updateHeight(e.target.value);
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

          <label htmlFor="avatar-builder_invalid">Invalid</label>
          <input
            id="avatar-builder_invalid"
            type="checkbox"
            value={invalid}
            onChange={e => updateInvalid(e.target.checked)}
          />

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
            <code>{`<TextInput${
              height ? ` height="${parseFloat(height)}" ` : ""
            }${invalid ? ` invalid="${invalid}"` : ""} />`}</code>
          )}
        </pre>
      </fieldset>
    </React.Fragment>
  );
}
