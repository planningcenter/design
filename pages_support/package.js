import React from "react";

export function Detail({
  componentName = "",
  description = "",
  name,
  version,
  peerDependencies
}) {
  return (
    <React.Fragment>
      <h1>{componentName}</h1>
      <blockquote>
        <p>{description}</p>
      </blockquote>
      <table>
        <tbody>
          <tr>
            <td>Install</td>
            <td>yarn add {name}</td>
          </tr>
          {peerDependencies && (
            <tr>
              <td>Install dependencies</td>
              <td>yarn add {Object.keys(peerDependencies).join(" ")}</td>
            </tr>
          )}
          <tr>
            <td>npm</td>
            <td>
              <a href={`https://www.npmjs.com/package/${name}`} target="_blank">
                {name}
              </a>
            </td>
          </tr>
          <tr>
            <td>Source</td>
            <td>
              <a
                href={`https://github.com/planningcenter/design/tree/master/${name.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
              >
                Github
              </a>
            </td>
          </tr>
          <tr>
            <td>Bundle</td>
            <td>
              <a href={`https://unpkg.com/${name}/dist/`} target="_blank">
                unpkg.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Latest</td>
            <td>{version}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
