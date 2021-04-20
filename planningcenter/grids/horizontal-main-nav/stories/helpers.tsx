import * as React from "react";

export function SampleContainer(props): JSX.Element {
  return (
    <div style={{ backgroundColor: "tomato", paddingTop: "1rem" }} {...props} />
  );
}
