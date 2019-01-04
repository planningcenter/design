import * as React from "react";
import * as MonoAppText from "./mono_app_text";

export function MonoAppName({ appName, color, size = 20 }) {
  return React.createElement(MonoAppText[appName], { color, size });
}
