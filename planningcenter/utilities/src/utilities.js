export function mapPropsToClassNames(block = "") {
  return (options = []) => {
    return (props = {}) => {
      return (options.length
        ? [
            options.filter(k => props[k]).length ? `${block}` : "", // if there are any hits, add the base class
            ...options.map(modifierName => {
              let modifierValue = props[modifierName];

              if (modifierValue === null) {
                return;
              }

              if (typeof modifierValue === "undefined") {
                return;
              }

              if (typeof modifierValue === "object") {
                let classes = [];

                Object.entries(props).forEach(([modifierName, valuesAt]) =>
                  Object.entries(valuesAt).forEach(([at, modifierValue]) =>
                    classes.push(
                      getSelector({
                        block: `@${at}`,
                        element: block,
                        modifierName,
                        modifierValue
                      })
                    )
                  )
                );

                return classes.join(" ").trim();
              }

              return getSelector({
                block,
                modifierName,
                modifierValue
              });
            })
          ]
        : []
      )
        .join(" ")
        .trim();
    };
  };
}

function dasherize(str) {
  return str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
}

function getSelector({
  block = "",
  element = "",
  modifierName = "",
  modifierValue = ""
} = {}) {
  function getModifier(name, value) {
    if (!name || !value) {
      return;
    }

    if (value === true) {
      return `--${dasherize(name)}`;
    }

    return `--${dasherize(name)}_${value}`;
  }

  return [
    block && `${block}`,
    element && `__${element}`,
    getModifier(modifierName, modifierValue)
  ].join("");
}
