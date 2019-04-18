import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";
import Link from "next/link";
import "github-markdown-css";

import Layout from "../../../pages_support/layout";

import { Avatar, sizes } from "../../../planningcenter/avatar/src/avatar";
import "../../../planningcenter/avatar/css/avatar.css";
import Readme from "../../../planningcenter/avatar/README.md";
import pkg from "../../../planningcenter/avatar/package.json";
import { Detail } from "../../../pages_support/package";

function AvatarBuilder() {
  let [alt, updateAlt] = React.useState("A kitty");
  let [src, updateSrc] = React.useState("http://placekitten.com/200/300");
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
      size={
        size === "responsive" ? formattedResponsiveSizes : parseFloat(size, 10)
      }
    />
  );

  return (
    <React.Fragment>
      <label htmlFor="avatar-builder_src">Source</label>
      <input
        id="avatar-builder_src"
        type="text"
        value={src}
        onChange={e => updateSrc(e.target.value)}
      />

      <br />

      <label htmlFor="avatar-builder_alt">Alt</label>
      <input
        id="avatar-builder_alt"
        type="text"
        value={alt}
        onChange={e => updateAlt(e.target.value)}
      />

      <br />

      <label htmlFor="avatar-builder_inset">Inset</label>
      <input
        id="avatar-builder_inset"
        type="checkbox"
        onChange={e => updateInset(e.target.checked)}
      />

      <br />

      <label htmlFor="avatar-builder_size">Size</label>
      <select
        value={size}
        onChange={e => {
          updateSize(e.target.value);
        }}
      >
        {sizes.map(size => (
          <option value={size} key={size}>
            {size} — {size * 8}px
          </option>
        ))}
        <option value="responsive" key="responsive">
          responsive
        </option>
      </select>

      <br />

      {size === "responsive" && (
        <fieldset>
          <label>Responsive Sizes:</label>
          <br />

          {["mn", "xs", "sm", "md", "lg", "xl"].map(breakpoint => (
            <React.Fragment>
              <label htmlFor={`avatar-builder_responsiveSize_${breakpoint}`}>
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
                {sizes.map(size => (
                  <option value={size} key={size}>
                    {size} — {size * 8}px
                  </option>
                ))}
              </select>

              <br />
            </React.Fragment>
          ))}
        </fieldset>
      )}

      <div>{component}</div>

      <pre>
        <code>{`${prettier.format(renderToStaticMarkup(component), {
          parser: "html",
          plugins: [htmlParser],
          printWidth: 34
        })}`}</code>
      </pre>

      <pre>
        <code>{`<Avatar
  src="${src}"
  alt="${alt}"
  size={${
    size === "responsive"
      ? JSON.stringify(formattedResponsiveSizes)
          .replace(",", ", ")
          .replace(":", ": ")
      : parseInt(size * 10, 10) / 10
  }}${inset ? `\n  inset={${inset}}` : ""}
/>`}</code>
      </pre>
    </React.Fragment>
  );
}

export default function() {
  return (
    <Layout>
      <div
        className="markdown-body"
        style={{ maxWidth: "40em", padding: "2em 4em" }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>

        <Detail {...pkg} />

        <section>
          <h2>Markup Builder</h2>
          <AvatarBuilder />
        </section>

        <section>
          <h2>Avatar</h2>
          <div
            style={{
              backgroundColor: "#fafafa",
              padding: 16
            }}
          >
            <span onClick={() => alert("tada!")}>
              <Avatar
                src="http://placekitten.com/200/300"
                alt="a cute kitten"
                size={8}
                inset={true}
              />
            </span>
          </div>
        </section>

        <section>
          <div
            style={{
              backgroundColor: "blue",
              padding: 16
            }}
          >
            <style>
              {`.ScaledAvatar--size_whatever { height: 40px; width: 40px }`}
            </style>
            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size="whatever"
              strict={false}
              inset={true}
            />
          </div>
        </section>

        <section>
          <div
            style={{
              backgroundColor: "blue",
              padding: 16
            }}
          >
            <Avatar src="http://placekitten.com/200/300" alt="a cute kitten" />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={2.5}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={3}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={4}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={5}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={6}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={7}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={8}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={9}
              inset={true}
            />
          </div>
        </section>

        <section>
          <div
            style={{
              backgroundColor: "pink",
              padding: 16
            }}
          >
            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={{
                mn: 3,
                xs: 4,
                sm: 5,
                md: 6,
                lg: 7,
                xl: "twiddle"
              }}
              strict={false}
              inset={true}
            />

            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={{
                mn: 8,
                xs: 7,
                sm: 6,
                md: 5,
                lg: 4,
                xl: 3
              }}
              inset={true}
            />
          </div>
        </section>

        <Readme />
      </div>
    </Layout>
  );
}
