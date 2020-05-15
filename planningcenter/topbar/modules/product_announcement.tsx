import * as React from "react";
import { PointBreak } from "./display_switch";
import { X as XSymbol } from "./symbols";

/*
ProductAnnouncement:
Displays a dismissible product announcements when provided an `html` prop.
Renders nothing when no `html` prop is falsy.

When the dismiss button is clicked, ProductAnnouncement will immediately dissappear.
Pass an `onClick` prop to coordinate this dismissal with a server request that will prevent message from being passed to future page views.

It should look something like this in your application's Topbar composition:

```jsx
<ProductAnnouncement
  colors={shared.colors}
  html={this.props.productAnnouncement}
  onClick={() => alert("Sending fire-and-forget dismiss request to server")}
/>
```

Attributes like `className`, `id`, `data-*`, and `aria-*` are all applied to the root element.
*/

export function ProductAnnouncement({
  colors,
  html = "",
  onClick = () => {},
  ...props
}) {
  let [dismissed, updateDismissed] = React.useState(false);

  return dismissed || !html ? null : (
    <StyleProvider colors={colors} {...props}>
      <StyledAnnouncement>
        <span dangerouslySetInnerHTML={{ __html: html }} />
        <StyledDismissButton
          onClick={() => {
            onClick();
            updateDismissed(true);
          }}
        />
      </StyledAnnouncement>
    </StyleProvider>
  );
}

class StyleProvider extends React.Component<
  {
    style?: object;
    className?: string;
    colors: any;
  },
  {}
> {
  render() {
    const { children, className, colors, style, ...platformProps } = this.props;

    return (
      <div
        className={["__Topbar_ProductAnnouncement_link", className]
          .filter(Boolean)
          .join(" ")
          .trim()}
        style={{
          color: "white" /* TODO: need to update to support more apps */,
          backgroundColor: colors.base1,
          ...style,
        }}
        {...platformProps}
      >
        <style>{`
            .__Topbar_ProductAnnouncement_link { color: white }
            .__Topbar_ProductAnnouncement_link a { color: ${colors.base0} }
            .__Topbar_ProductAnnouncement_link a:hover { color: ${colors.base1} }
            .__Topbar_ProductAnnouncement_link a:active { color: ${colors.base2} }
          `}</style>
        {children}
      </div>
    );
  }
}

class StyledAnnouncement extends React.Component<{ style?: object }, {}> {
  render() {
    const { style, ...platformProps } = this.props;

    return (
      <PointBreak
        render={(breakpoint) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: ["xs", "sm"].indexOf(breakpoint) !== -1 ? 16 : 24,
              paddingBottom: 16,
              paddingRight: 18,
              borderTop: "1px solid rgba(0,0,0,.35)",
              ...style,
            }}
            {...platformProps}
          />
        )}
      />
    );
  }
}

function StyledDismissButton({ ...props }: any): JSX.Element {
  return (
    <button
      type="button"
      style={{
        cursor: "pointer",
        backgroundColor: "transparent",
        borderWidth: 0,
        WebkitAppearance: "none",
        // larger click target without increasing box
        padding: 8,
        margin: -8,
      }}
      {...props}
    >
      <XSymbol fill="white" style={{ width: 20, height: 20 }} />
    </button>
  );
}
