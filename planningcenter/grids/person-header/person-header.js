import React from "react";
import { Avatar as AvatarBase } from "../../elements/avatar/avatar.js";
import { Text as TextBase } from "../../elements/text/text.js";

export function Container({ as: As = "div", ...props }) {
  return <As data-person-header--container {...props} />;
}

export function Detail({ as: As = "div", ...props }) {
  return <As data-person-header--detail {...props} />;
}

export function Avatar(props) {
  return <AvatarBase data-person-header--avatar {...props} />;
}

export function Name(props) {
  return <TextBase data-person-header--name {...props} />;
}
