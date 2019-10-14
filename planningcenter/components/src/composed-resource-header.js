import React from "react";

export {
  TabContainer,
  SummaryContainer,
  FlexSpacer,
  Title,
  Tab
} from "../../resource-header/src/resource-header";
import { Avatar as ComponentsAvatar } from "./composed-avatar";

export function Avatar({ className, ...props }) {
  return (
    <ComponentsAvatar
      className={[className, "ResourceHeader__Avatar"].join(" ").trim()}
      {...props}
    />
  );
}
