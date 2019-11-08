import React from "react";
import { SIZES as SYSTEM_SIZES } from "../../../system/src/system";
import PropTypes from "prop-types";

export const SIZES = Array.from(
  new Set([2.5, ...SYSTEM_SIZES.filter(s => s >= 3), 9])
).sort();

export function Avatar({
  as: As = "span",
  className,
  src,
  srcSet,
  alt,
  children,
  ...props
}) {
  let imgProps = { src, srcSet, alt };
  let img = <img {...imgProps} />;

  return (
    <As className={[className, "Avatar"].join(" ")} {...props}>
      {typeof children === "function" ? children(img, imgProps) : img}
    </As>
  );
}

Avatar.propTypes = {
  as: PropTypes.element,
  className: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  alt: PropTypes.string,
  chidren: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
