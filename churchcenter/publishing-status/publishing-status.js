import React from "react";
import {
  check,
  x,
  newWindow,
  exclamationTriangle,
  downCaret,
} from "@planningcenter/icons/paths/general";

export function produceViewState({
  churchCenterAppIsActive = false,
  churchCenterProductURL: _churchCenterProductURL = "",
  churchCenterWebIsActive = false,
  userIsOrgAdmin = false,
  productIsPublished = false,
  settingsURL: _settingsURL = "",
  ...restIncomingState
}) {
  let state = {
    churchCenterAppIsActive,
    churchCenterWebIsActive,
    userIsOrgAdmin,
    productIsPublished,
    _churchCenterProductURL,
    _settingsURL,
    get settingsURL() {
      if (this.userIsOrgAdmin) return this._settingsURL;
      return "";
    },
    get churchCenterProductURL() {
      if (this.churchCenterWebIsActive) return this._churchCenterProductURL;
      return "";
    },
    ...restIncomingState,
  };

  if (state.churchCenterIsEnabled && state.productIsPublished) {
    return {
      view: "Status",
      ...state,
    };
  }

  if (!state.churchCenterIsEnabled && !state.productIsPublished) {
    return {
      view: "ProductNotPublished",
      ...state,
    };
  }

  if (state.churchCenterIsEnabled && !state.productIsPublished) {
    return {
      view: "ProductNotPublished",
      ...state,
    };
  }

  if (!state.churchCenterIsEnabled && state.productIsPublished) {
    return {
      view: "ChurchCenterNotEnabled",
      ...state,
    };
  }

  return {
    view: "Error",
    ...state,
  };
}

export const ViewContext = React.createContext({ view: "Error" });

ViewController.displayName = "publishing-status:ViewController";
export function ViewController({
  children,
  reducer = produceViewState,
  ...state
}) {
  return (
    <ViewContext.Provider value={reducer(state)}>
      {children}
    </ViewContext.Provider>
  );
}

ViewSwitch.displayName = "publishing-satus:ViewSwitch";
export function ViewSwitch(props) {
  let context = React.useContext(ViewContext);

  switch (context.view) {
    case "Status":
      return (
        <StatusView
          churchCenterWebIsActive={context.churchCenterWebIsActive}
          churchCenterAppIsActive={context.churchCenterAppIsActive}
        >
          {props.positiveMessage}
        </StatusView>
      );

    case "ProductNotPublished":
      return (
        <ProductNotPublishedView
          settingsURL={context.settingsURL}
          productName={props.productName}
        >
          {props.negativeMessage}
        </ProductNotPublishedView>
      );

    case "ChurchCenterNotEnabled":
      return (
        <ChurchCenterNotEnabledView settingsURL={context.settingsURL}>
          {props.negativeMessage}
        </ChurchCenterNotEnabledView>
      );

    case "Error": {
      throw new Error(`ChurchCenterStatus: case not supported`);
    }

    default:
      return null;
  }
}

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static displayName = "publishing-status:ErrorBoundary";

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
  children = "We encountered an error when trying to display status information for Church Center. Please contact support for help.",
  ...props
}) {
  return (
    <As {...props}>
      <span>{children}</span>
    </As>
  );
}

ChurchCenterNotEnabledView.displayName =
  "publishing-status:ChurchCenterNotEnabledView";
export function ChurchCenterNotEnabledView({
  as: As = MessageContainer,
  children = "People cannot access this product on the web or mobile app.",
  settingsURL,
  ...props
}) {
  return (
    <As {...props}>
      <strong>Church Center is disabled. </strong>
      <span>{children} </span>
      {settingsURL && <a href={settingsURL}>Update settings</a>}
    </As>
  );
}

ProductNotPublishedView.displayName =
  "publishing-status:ProductNotPublishedView";
export function ProductNotPublishedView({
  as: As = MessageContainer,
  children = "People cannot access this product on the web or mobile app.",
  productName = "This product",
  settingsURL,
  ...props
}) {
  return (
    <As {...props}>
      <strong>{productName} is not published on Church Center. </strong>
      <span>{children} </span>
      {settingsURL && <a href={settingsURL}>Update settings</a>}
    </As>
  );
}

StatusView.displayName = "publishing-status:StatusView";
export function StatusView({
  as: As = MessageContainer,
  children = "On Church Center, people can browse and register for events.",
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
        <span>{children}</span>
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

MenuButton.displayName = "publishing-status:MenuButton";
export function MenuButton({
  as: As = "button",
  children = "Church Center",
  ...props
}) {
  let context = React.useContext(ViewContext);
  let LegacyGap = () => <div style={{ margin: "4px" }} />;

  return (
    <As
      style={{
        display: "flex",
        alignItems: "center",
      }}
      {...props}
    >
      {context.view !== "Status" && (
        <React.Fragment>
          <ExclamationTriangleIcon />
          <LegacyGap />
        </React.Fragment>
      )}
      {children}
      <LegacyGap />
      <span data-reach-menu-button-toggle-icon>
        <DownCaretIcon />
      </span>
    </As>
  );
}

MenuItems.displayName = "publishing-status:MenuItems";
export function MenuItems({ as: As = "div", style, ...props }) {
  return (
    <As
      style={{
        width: "var(--publishing-status--menu-items-container--width, 280px)",
        whiteSpace: "normal",
        ...style,
      }}
      {...props}
    />
  );
}

MenuLinks.displayName = "publishing-status:MenuLink";
export function MenuLinks(props) {
  let context = React.useContext(ViewContext);

  if (
    context.view === "Status" &&
    Boolean(context.settingsURL || context.churchCenterProductURL)
  ) {
    return <React.Fragment>{props.children}</React.Fragment>;
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
