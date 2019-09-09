import React from "react";
import { mapPropsToClassNames } from "../../planningcenter/utilities/src/utilities";

export function PutButton(props) {
  // action is intentionally overridden
  return <Button {...props} className="RestfulButton--action_put" />;
}

export function DestroyButton(props) {
  // action is intentionally overridden
  return <Button {...props} className="RestfulButton--action_destroy" />;
}

export function CancelButton(props) {
  // action is intentionally overridden
  return <Button {...props} className="RestfulButton--action_cancel" />;
}

export function Button({ className, height, ...props }) {
  return (
    <ButtonElement
      className={[
        mapPropsToClassNames("ScaledButton")(["height"])({ height }),
        className
      ].join(" ")}
      {...props}
    />
  );
}

export function ButtonElement({
  action,
  as: As = "button",
  className,
  height,
  type = "button",
  ...props
}) {
  let elementProps = {
    button: { type },
    input: { type }
  };

  return (
    <As
      className={[
        className,
        // getRestfulButtonClasses({ action }),
        // getScaledButtonClasses({ height }),
        "Button"
      ]
        .join(" ")
        .trim()}
      {...elementProps[As]}
      {...props}
    />
  );
}
