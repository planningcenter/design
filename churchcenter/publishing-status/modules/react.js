import React from "react";
import { produceViewState } from "./core";
import {
  check,
  x,
  newWindow,
  exclamationTriangle,
  downCaret,
} from "@planningcenter/icons/paths/general";

export const ViewContext = React.createContext({ view: "Error" });

ViewController.displayName = "publishing-status:ViewController";
export function ViewController({
  children,
  reducer = produceViewState,
  style,
  ...state
}) {
  return (
    <ViewContext.Provider value={{ style, ...reducer(state) }}>
      {children}
    </ViewContext.Provider>
  );
}

ViewSwitch.displayName = "publishing-satus:ViewSwitch";
export function ViewSwitch() {
  let {
    view,
    churchCenterWebIsActive,
    churchCenterAppIsActive,
    settingsURL,
    productName,
  } = React.useContext(ViewContext);

  switch (view) {
    case "Status":
      return (
        <StatusView
          churchCenterWebIsActive={churchCenterWebIsActive}
          churchCenterAppIsActive={churchCenterAppIsActive}
        />
      );

    case "ProductNotPublished":
      return (
        <ProductNotPublishedView
          settingsURL={settingsURL}
          productName={productName}
        />
      );

    case "ChurchCenterNotEnabled":
      return <ChurchCenterNotEnabledView settingsURL={settingsURL} />;

    case "Error": {
      throw new Error(`ChurchCenterStatus: case not supported`);
    }

    default:
      return null;
  }
}

// ErrorBoundary.displayName = "publishing-status:ErrorBoundary"
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO: expose prop to configure reporting for one-component install
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorView />;
    }

    return this.props.children;
  }
}

ErrorView.displayName = "publishing-status:ErrorView";
export function ErrorView({
  as: As = MessageContainer,
  children = (
    <span>
      We encountered an error when trying to display status information for
      Church Center. Please contact support for help.
    </span>
  ),
  ...props
}) {
  return <As {...props}>{children}</As>;
}

ChurchCenterNotEnabledView.displayName =
  "publishing-status:ChurchCenterNotEnabledView";
export function ChurchCenterNotEnabledView({
  as: As = MessageContainer,
  children = (
    <span>People cannot access this product on the web or mobile app. </span>
  ),
  settingsURL,
  ...props
}) {
  return (
    <As {...props}>
      <strong>Church Center is disabled. </strong>
      {children}
      {settingsURL && <a href={settingsURL}>Update settings</a>}
    </As>
  );
}

ProductNotPublishedView.displayName =
  "publishing-status:ProductNotPublishedView";
export function ProductNotPublishedView({
  as: As = MessageContainer,
  children = (
    <span>People cannot access this product on the web or mobile app. </span>
  ),
  productName = "This product",
  settingsURL,
  ...props
}) {
  return (
    <As {...props}>
      <strong>{productName} is not published on Church Center. </strong>
      {children}
      {settingsURL && <a href={settingsURL}>Update settings</a>}
    </As>
  );
}

StatusView.displayName = "publishing-status:StatusView";
export function StatusView({
  as: As = MessageContainer,
  churchCenterAppIsActive,
  churchCenterWebIsActive,
}) {
  function PlatformStatus({ enabled = false, children, ...props }) {
    return (
      <div style={{ display: "flex", alignItems: "center" }} {...props}>
        {enabled ? <CheckIcon /> : <XIcon />}
        <span style={{ marginRight: "4px" }} />
        <strong>{children}</strong>
      </div>
    );
  }

  return (
    <As style={{ display: "grid", gap: "16px" }}>
      <div>
        <span>
          On Church Center, people can browse and register for events.
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <PlatformStatus enabled={churchCenterWebIsActive}>Web</PlatformStatus>
        <span style={{ marginRight: "24px" }} />
        <PlatformStatus enabled={churchCenterAppIsActive}>
          Mobile app
        </PlatformStatus>
      </div>
    </As>
  );
}

MessageContainer.displayName = "publishing-status:MessageContainer";
export function MessageContainer({ as: As = "div", style, ...props }) {
  let defaultStyle = {
    padding: "var(--publishing-status--message-container--padding, 16px)",
  };

  return (
    <As
      style={
        typeof style === "function"
          ? style(defaultStyle)
          : { ...defaultStyle, ...style }
      }
      {...props}
    />
  );
}

ProductLink.displayName = "publishing-status:ProductLink";
export function ProductLink({
  as: As = "a",
  children = "Visit published page",
  href,
  ...props
}) {
  let { churchCenterProductURL } = React.useContext(ViewContext);

  if (churchCenterProductURL) {
    return (
      <As
        target="_blank"
        rel="noopener noreferrer"
        href={href || churchCenterProductURL}
        {...props}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          <span>{children}</span>
          <span style={{ marginRight: "8px" }} />
          <NewWindowIcon />
        </span>
      </As>
    );
  }

  return null;
}

SettingsLink.displayName = "publishing-status:SettingsLink";
export function SettingsLink({
  as: As = "a",
  children = "Update settings",
  href, // disgarded, controller removed url if !userIsOrgAdmin (REWORK:)
  ...props
}) {
  let { settingsURL } = React.useContext(ViewContext);

  if (settingsURL) {
    return (
      <As href={settingsURL} {...props}>
        {children}
      </As>
    );
  }

  return null;
}

NewWindowIcon.displayName = "publishing-status:NewWindowIcon";
export function NewWindowIcon() {
  return (
    <Icon
      title="New window"
      desc="will open in new window"
      path={newWindow}
      style={{
        color: "var(--publishing-status--product-link--color, inherit)",
        fontSize: ".8572em",
      }}
    />
  );
}

CheckIcon.displayName = "publishing-status:CheckIcon";
export function CheckIcon() {
  return (
    <Icon
      title="checkmark"
      desc="indicates enabled"
      path={check}
      style={{
        color: "var(--publishing-status--product-enabled--color, green)",
        fontSize: ".8572em",
      }}
    />
  );
}

XIcon.displayName = "publishing-status:XIcon";
export function XIcon() {
  return (
    <Icon
      title="x"
      desc="indicates not enabled"
      path={x}
      style={{
        color: "var(--publishing-status--product-not-enabled--color, red)",
        fontSize: ".8572em",
      }}
    />
  );
}

ExclamationTriangleIcon.displayName =
  "publishing-status:ExclamationTriangleIcon";
export function ExclamationTriangleIcon() {
  return (
    <Icon
      title="Exclamation triangle"
      desc="This product is not published on Church Center"
      path={exclamationTriangle}
      style={{
        color: "var(--publishing-status--product-link--color, inherit)",
      }}
    />
  );
}

DownCaretIcon.displayName = "publishing-status:DownCaretIcon";
export function DownCaretIcon() {
  return (
    <Icon
      title="Down caret"
      desc="Open Church Center Publishing status menu"
      path={downCaret}
      style={{
        color: "var(--publishing-status--product-link--color, inherit)",
      }}
    />
  );
}

Icon.displayName = "publishing-status:Icon";
export function Icon({ desc, name, path, title, style, ...props }) {
  return (
    <svg
      viewBox="0 0 16 16"
      role="img"
      style={{
        display: "inline-block",
        verticalAlign: "text-top",
        height: "1em",
        width: "1em",
        fontSize: "1em",
        ...style,
      }}
      {...props}
    >
      <title>{title}</title>
      <desc>{desc}</desc>
      <path d={path} fill="currentColor" />
    </svg>
  );
}
