import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";

import "../../../planningcenter/components/css/components.css";
import {
  Avatar,
  AVATAR_SIZES as SIZES
} from "../../../planningcenter/components/src/components";

import Layout from "../../../pages_support/components-layout";
import { Sheet as SheetBase } from "../../../pages_support/sheet";

import pkg from "../../../planningcenter/avatar/package.json";

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

function Table(props) {
  return (
    <React.Fragment>
      <style>
        {`
          .table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          .table td {
            border: 1px solid #dfe2e5;
            padding: 7px 15px;
          }`}
      </style>
      <table className="table" {...props} />
    </React.Fragment>
  );
}

export default function() {
  return (
    <Layout>
      <h1>Avatar</h1>
      <p>{pkg.description}</p>

      <section>
        <h2>Default</h2>
        <Sheet>
          <Avatar src="/static/200x300_kitten.jpeg" />
        </Sheet>
      </section>

      <section>
        <h2>Size</h2>
        <Sheet>
          {SIZES.map(size => (
            <Avatar size={size} src="/static/200x300_kitten.jpeg" />
          ))}
        </Sheet>
      </section>

      <section>
        <h2>Inset</h2>
        <Sheet
          style={{
            backgroundColor: "hsl(0, 0%, 60%)"
          }}
        >
          {SIZES.map(size => {
            let inset = size === 2.5 ? 0 : Math.round(size / 2);

            return (
              <Avatar inset size={size} src="/static/200x300_kitten.jpeg" />
            );
          })}
        </Sheet>
      </section>

      <section>
        <h2>Inactive</h2>
        <Sheet>
          <Avatar inactive size={9} src="/static/200x300_kitten.jpeg" />
        </Sheet>
      </section>

      <section>
        <h2>Details </h2>

        <Table>
          <tbody>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://github.com/planningcenter/design/blob/master/cypress/integration/avatar_spec.js"
                >
                  Specification
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://github.com/planningcenter/design/tree/master/planningcenter/avatar/extension"
                >
                  Extension
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://github.com/planningcenter/design/blob/master/planningcenter/components/src/composed-avatar.js"
                >
                  Composition
                </a>
              </td>
              <td>
                Implementation{" "}
                <a
                  target="_blank"
                  href="https://github.com/planningcenter/design/blob/master/planningcenter/avatar/css/avatar.css"
                >
                  CSS
                </a>{" "}
                <a
                  target="_blank"
                  href="https://github.com/planningcenter/design/blob/master/planningcenter/avatar/src/avatar.js"
                >
                  React
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section>
        <h2>Builder</h2>
        <Sheet>
          <div style={{ overflow: "hidden", maxWidth: "32em" }}>
            <Builder />
          </div>
        </Sheet>
      </section>
    </Layout>
  );
}

export function Preview() {
  return (
    <React.Fragment>
      {SIZES.map(size => (
        <Avatar size={size} src="/static/200x300_kitten.jpeg" />
      ))}
    </React.Fragment>
  );
}

function Builder() {
  let [alt, updateAlt] = React.useState("A kitty");
  let [src, updateSrc] = React.useState("/static/200x300_kitten.jpeg");
  let [inset, updateInset] = React.useState(false);
  let [size, updateSize] = React.useState(4);
  let [responsiveSizes, updateResponsiveSizes] = React.useState({
    mn: "ignore",
    xs: "ignore",
    sm: "ignore",
    md: "ignore",
    lg: "ignore",
    xl: "ignore"
  });
  let [inactive, updateInactive] = React.useState(false);
  let [output, updateOutput] = React.useState("react");

  let formattedResponsiveSizes = Object.entries(responsiveSizes)
    .filter(([_, v]) => v !== "ignore")
    .reduce(
      (o, [k, v]) => Object.assign(o, { [k]: parseInt(v * 10, 10) / 10 }),
      {}
    );

  let component = (
    <Avatar
      alt={alt}
      src={src}
      inset={inset}
      inactive={inactive}
      size={
        size === "responsive" ? formattedResponsiveSizes : parseFloat(size, 10)
      }
    />
  );

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
          <label htmlFor="avatar-builder_src">Source</label>
          <input
            id="avatar-builder_src"
            type="text"
            value={src}
            onChange={e => updateSrc(e.target.value)}
          />

          <label htmlFor="avatar-builder_alt">Alt</label>
          <input
            id="avatar-builder_alt"
            type="text"
            value={alt}
            onChange={e => updateAlt(e.target.value)}
          />

          <label htmlFor="avatar-builder_inset">Inset</label>
          <input
            id="avatar-builder_inset"
            type="checkbox"
            checked={inset}
            onChange={e => updateInset(e.target.checked)}
          />

          <label htmlFor="avatar-builder_inactive">Inactive</label>
          <input
            id="avatar-builder_inactive"
            type="checkbox"
            checked={inactive}
            onChange={e => updateInactive(e.target.checked)}
          />

          <label htmlFor="avatar-builder_size">Size</label>
          <select
            value={size}
            onChange={e => {
              updateSize(e.target.value);
            }}
          >
            {SIZES.map(size => (
              <option value={size} key={size}>
                {size} — {size * 8}px
              </option>
            ))}
            <option value="responsive" key="responsive">
              responsive
            </option>
          </select>

          {size === "responsive" && (
            <React.Fragment>
              <label>Responsive Sizes:</label>
              <fieldset>
                {["mn", "xs", "sm", "md", "lg", "xl"].map(breakpoint => (
                  <React.Fragment>
                    <label
                      htmlFor={`avatar-builder_responsiveSize_${breakpoint}`}
                    >
                      <code>{breakpoint}</code>:{" "}
                    </label>

                    <select
                      id={`avatar-builder_responsiveSize_${breakpoint}`}
                      value={responsiveSizes[breakpoint]}
                      onChange={e => {
                        updateResponsiveSizes({
                          ...responsiveSizes,
                          [breakpoint]: e.target.value
                        });
                      }}
                    >
                      <option value="ignore">Ignore</option>
                      {SIZES.map(size => (
                        <option value={size} key={size}>
                          {size} — {size * 8}px
                        </option>
                      ))}
                    </select>

                    <br />
                  </React.Fragment>
                ))}
              </fieldset>
            </React.Fragment>
          )}

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

      <div>{component}</div>

      <pre
        style={{ overflow: "auto", backgroundColor: "#fafafa", padding: 16 }}
      >
        {output === "html" && (
          <code>{`${prettier.format(renderToStaticMarkup(component), {
            parser: "html",
            plugins: [htmlParser],
            printWidth: 34
          })}`}</code>
        )}

        {output === "react" && (
          <code>{`<Avatar
  src="${src}"
  alt="${alt}"
  size={${
    size === "responsive"
      ? JSON.stringify(formattedResponsiveSizes)
          .replace(",", ", ")
          .replace(":", ": ")
      : parseInt(size * 10, 10) / 10
  }}${inset ? `\n  inset={${inset}}` : ""}${
            inactive ? `\n  inactive={${inactive}}` : ""
          }
/>`}</code>
        )}
      </pre>
    </React.Fragment>
  );
}
