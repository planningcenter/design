import React from "react";

function Symbol({ className, symbol: _symbol, ...platformProps }) {
  let [path, symbol] = _symbol.replace(".svg", "").split("#");

  return (
    <svg
      role="img"
      title={`${symbol} icon`}
      className={["symbol", className].join(" ").trim()}
      {...platformProps}
    >
      <use xlinkHref={`${path}.svg#${symbol}`} />
    </svg>
  );
}

export default Symbol;
