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
        className={["Topbar_ProductAnnouncement", className]
          .filter(Boolean)
          .join(" ")
          .trim()}
        style={{
          backgroundColor: colors.base1,
          ...style,
        }}
        {...platformProps}
      >
        <style>{`
            .Topbar_ProductAnnouncement {
              color: white;
              font-size: 14px;
            }
            .Topbar_ProductAnnouncement a { color: white; font-weight: bold; }
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
              boxSizing: "border-box",
              paddingTop: 14,
              paddingLeft: ["xs", "sm"].indexOf(breakpoint) !== -1 ? 16 : 24,
              paddingBottom: 14,
              paddingRight: 18,
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
