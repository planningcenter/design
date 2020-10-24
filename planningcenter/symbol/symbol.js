import React from "react";
import uniqueId from "lodash.uniqueid";

export const ForceTitleContext = React.createContext(false);

export function Symbol({
  className,
  symbol: _symbol,
  title: _title = "",
  description = "",
  role = "img",
  ...platformProps
}) {
  let useSymbolAsTitle = React.useContext(ForceTitleContext);

  let [path, symbol] = _symbol.replace(".svg", "").split("#");
  let uid = uniqueId(`${symbol}-`);
  let title = _title ? _title : useSymbolAsTitle ? symbol : "";
  let optionalAttrs =
    title || description
      ? {
          "aria-labelledby": [
            title && `title-${uid}`,
            description && `desc-${uid}`,
          ]
            .filter(Boolean)
            .join(" "),
        }
      : null;

  return (
    <svg
      role={role}
      className={["symbol", className].join(" ").trim()}
      {...optionalAttrs}
      {...platformProps}
    >
      {title && <title id={`title-${uid}`}>{title}</title>}
      {description && <desc id={`desc-${uid}`}>{description}</desc>}
      <use xlinkHref={`${path}.svg#${symbol}`} />
    </svg>
  );
}
