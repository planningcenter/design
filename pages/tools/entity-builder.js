import React from "react";
import Link from "next/link";
import { getSelector } from "../../planningcenter/utilities/src/utilities";
import "github-markdown-css";

function getComposedBlockName(block, composed) {
  function upperFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return upperFirst(block) + upperFirst(composed);
}

function ModifierOptionInput({ update, ...props }) {
  return (
    <input
      type="text"
      onChange={e => {
        e.preventDefault();
        return update(e.target.value);
      }}
      {...props}
    />
  );
}

function ModifierOptions({ modifiers, modifier, update, ...props }) {
  return (
    <div style={{ paddingLeft: "1em" }} {...props}>
      {modifier.options &&
        modifier.options.length !== 0 &&
        modifier.options.map((option, oi) => (
          <div key={option}>
            <ModifierOptionInput
              value={option}
              update={option => update(option, oi)}
            />
          </div>
        ))}
      {modifier.type === "enumerable" && (
        <div key="add-option">
          <button
            type="button"
            onClick={() =>
              updateModifiers([
                ...modifiers.slice(0, mi),
                {
                  ...modifier,
                  options: modifiers[mi].options.concat(["test"])
                },
                ...modifiers.slice(mi + 1, modifiers.length)
              ])
            }
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

function Home() {
  let [block, updateBlock] = React.useState("");
  let [composes, updateComposes] = React.useState("");
  let [modifiers, updateModifiers] = React.useState([
    { name: "test", options: ["one", "two"], type: "enumerable" }
  ]);

  return (
    <div
      style={{
        maxWidth: "40em",
        padding: "2em 4em"
      }}
      className="markdown-body"
    >
      <Link href="/">
        <a>Home</a>
      </Link>

      <h1>BEM Entity Generator</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div>
          <form>
            <fieldset>
              <h2>Block</h2>

              <label htmlFor={`${block}_name`}>Name</label>
              <br />
              <input
                type="text"
                id={`${block}_name`}
                value={block}
                onChange={e => updateBlock(e.target.value)}
              />

              <label>
                <h4>Block Extends</h4>
                <select
                  onChange={e => {
                    updateComposes(e.target.value);
                    e.preventDefault();
                  }}
                  value={composes}
                >
                  <option value="">(none)</option>
                  <option value="Avatar">Avatar</option>
                  <option value="Text">Text</option>
                </select>
              </label>
            </fieldset>

            <fieldset>
              <h2>Modifiers</h2>

              <div>
                {modifiers.map((modifier, mi) => (
                  <fieldset key={modifier}>
                    <label htmlFor={`${modifier.name}_key`}>Name</label>
                    <br />
                    <input
                      type="text"
                      id={`${modifier.name}_name`}
                      value={modifier.name}
                      onChange={e => {
                        return updateModifiers([
                          ...modifiers.slice(0, mi),
                          { ...modifiers[mi], name: e.target.value },
                          ...modifiers.slice(mi + 1, modifiers.length)
                        ]);
                      }}
                    />

                    <br />

                    <label htmlFor={`${modifier.name}_type`}>Type</label>
                    <br />
                    <select
                      value={modifier.type}
                      id={`${modifier.name}_type`}
                      onChange={e => {
                        e.preventDefault();
                        return updateModifiers([
                          ...modifiers.slice(0, mi),
                          {
                            ...modifiers[mi],
                            type: e.target.value,
                            options: []
                          },
                          ...modifiers.slice(mi + 1, modifiers.length)
                        ]);
                      }}
                    >
                      <option value="enumerable">Enumerable</option>
                      <option value="boolean">Boolean</option>
                    </select>

                    <br />

                    <label htmlFor={`${modifier}_responsive`}>Responsive</label>
                    <br />
                    <input
                      type="checkbox"
                      id={`${modifier.name}_responsive`}
                      checked={modifier.responsive}
                      onChange={e => {
                        return updateModifiers([
                          ...modifiers.slice(0, mi),
                          {
                            ...modifiers[mi],
                            responsive: !modifiers[mi].responsive
                          },
                          ...modifiers.slice(mi + 1, modifiers.length)
                        ]);
                      }}
                    />

                    <br />

                    <label>Options</label>
                    <br />

                    <ModifierOptions
                      modifier={modifier}
                      modifiers={modifiers}
                      update={(option, position) => {
                        updateModifiers([
                          ...modifiers.slice(0, mi),
                          {
                            ...modifier,
                            options: [
                              ...modifier.options.slice(0, position),
                              option,
                              ...modifier.options.slice(
                                position + 1,
                                modifier.options.length
                              )
                            ]
                          },
                          ...modifiers.slice(mi + 1, modifiers.length)
                        ]);
                      }}
                    />
                  </fieldset>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    updateModifiers([
                      ...modifiers,
                      {
                        name: "",
                        type: "boolean",
                        responsive: false
                      }
                    ])
                  }
                >
                  +
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <div>
          {(block || composes) && (
            <pre
              style={{
                backgroundColor: "#fafafa",
                padding: "3em"
              }}
            >
              <code>
                {`.${getSelector({
                  block: getComposedBlockName(block, composes)
                })} {

}
`}
                {modifiers.map(modifier =>
                  modifier.type === "boolean"
                    ? `.${getSelector({
                        block: getComposedBlockName(block, composes),
                        modifierName: modifier.name.toLowerCase(),
                        modifierValue: true
                      })} {

}`
                    : modifier.options.map(
                        option => `.${getSelector({
                          block: getComposedBlockName(block, composes),
                          modifierName: modifier.name.toLowerCase(),
                          modifierValue: option
                        })} {

}
`
                      )
                )}
              </code>
            </pre>
          )}
        </div>
        <div>
          {modifiers.filter(m => m.responsive).length !== 0 && (
            <pre
              style={{
                backgroundColor: "#fafafa",
                padding: "3em",
                marginLeft: "1em"
              }}
            >
              <code>
                {modifiers
                  .filter(modifier => modifier.responsive)
                  .map(modifier =>
                    [
                      ["mn", 0],
                      ["xs", 480],
                      ["sm", 600],
                      ["md", 720],
                      ["lg", 960],
                      ["xl", 1200]
                    ].map(
                      ([bp, px]) =>
                        `@media screen and (min-width: ${px}${px ? "px" : ""}) {
  ${
    modifier.options && modifier.options.length
      ? modifier.options
          .map(
            option =>
              `${getSelector({
                block: `.\\@${bp}`,
                element: getComposedBlockName(block, composes),
                modifierName: modifier.name,
                modifierValue: option
              })} {

  }`
          )
          .join("\n\n  ")
      : `${getSelector({
          block: `.\\@${bp}`,
          element: getComposedBlockName(block, composes),
          modifierName: modifier.name,
          options: [],
          modifierValue: true
        })} {

  }`
  }
}

`
                    )
                  )}
              </code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
