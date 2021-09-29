import * as React from "react";

import pcoUrl, * as PCO_URL from "@planningcenter/url";
import getAppsSwitchProductPath from "./get_apps_switch_product_path";
import { StyledRoot } from "./styled_root";
import { Unbutton } from "./unbutton";
import { Avatar } from "./avatar";
import { appsMenuFormatter, connectedPeopleMenuFormatter } from "./formatters";
import { slightBackgroundTransition, fontFamily, IEFlex1 } from "./styles";
import { MonoAppIcon } from "./mono_app_icon";
import { MonoAppName } from "./mono_app_name";
import { ColorAppIcon } from "./color_app_icon";
import { BellIcon } from "../index";
import apiRequest, { defaultFetch } from "./api_request";

interface Notification {
  appName: string;
  time: string;
  title: string;
}

const DUMMY_DATA_UNREAD = [
  {
    appName: "Registrations",
    time: "Yesterday at 3:35am",
    title: "Signups are available for Traditional Service, June 1-August 30",
  },
  {
    appName: "Calendar",
    time: "Sunday at 10:11am",
    title: "There's a scheduling conflict on July 10",
  },
  {
    appName: "Groups",
    time: "Friday at 8:03pm",
    title: "Attendance is requested for Weekly Meeting (Vista Small Group)",
  },
];

const DUMMY_DATA_READ = [
  {
    appName: "Registrations",
    time: "April 12 at 12:30pm",
    title: "Backitup Numbercrunch has registered for New Members Class",
  },
  {
    appName: "People",
    time: "April 10 at 2:44pm",
    title: "A potential duplicate was created for Benadryl Custardbath",
  },
];

// TODO: extract to component. Used now by MediumTopbar
export class AppsButton extends React.Component<
  {
    appName: string;
    colors: any;
    expanded: boolean;
    style?: object;
    onClick: any;
    displayIconOnly?: boolean;
  },
  {
    entered: boolean;
    down: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      entered: false,
      down: false,
    };
  }

  public static defaultProps = {
    displayIconOnly: false,
  };

  render() {
    const {
      appName,
      colors,
      expanded,
      style = null,
      onClick,
      displayIconOnly,
      ...nativeProps
    } = this.props;

    const getBackgroundColor = () => {
      if (expanded && !this.state.down) return colors.base1;
      if (this.state.entered && this.state.down) return colors.base2;
      if (this.state.entered) return colors.base1;
      return "transparent";
    };

    return (
      <Unbutton
        style={{
          outline: 0, // TODO: #improve-outline-a11y
          paddingLeft: "16px",
          paddingRight: "16px",
          whiteSpace: "nowrap",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: getBackgroundColor(),
          ...slightBackgroundTransition,
          ...style,
        }}
        onClick={onClick}
        onMouseEnter={() => this.setState({ entered: true })}
        onMouseLeave={() => this.setState({ entered: false })}
        onMouseDown={() => this.setState({ down: true })}
        onMouseUp={() => this.setState({ down: false })}
        {...nativeProps}
      >
        <MonoAppIcon
          appName={appName.replace(/[\s-]/, "")}
          colors={this.props.colors}
          size={24}
        />
        {!displayIconOnly && [
          <div key="spacer-1" style={{ margin: 4 }} />,
          <MonoAppName
            appName={appName.replace(/[\s-]/, "")}
            color="#fff"
            size={24}
            key="mono-app-name"
          />,
          <div key="space-2" style={{ margin: 4 }} />,
          <DisclosureChevronIcon
            key="disclosure-chevron-icon"
            colors={colors}
            style={{ display: "block" }}
          />,
        ]}
      </Unbutton>
    );
  }
}

export class HoverableListItem extends React.Component<
  {
    component?: any;
    style?: object;
    href?: string;
    onClick?: any;
  },
  {
    entered: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      entered: false,
    };
  }

  render() {
    const { component: C = "span", style = null, ...nativeProps } = this.props;

    const getBackgroundColor = () => {
      if (this.state.entered) return "#f7f7f7";
      return "transparent";
    };

    return (
      <C
        style={{
          ...style,
          backgroundColor: getBackgroundColor(),
        }}
        onMouseEnter={() => this.setState({ entered: true })}
        onMouseLeave={() => this.setState({ entered: false })}
        {...nativeProps}
      />
    );
  }
}

export class Hoverable extends React.Component<
  {
    component?: any;
    style?: object;
    hover?: any;
    active?: any;
    type?: string;
    onClick?: any;
  },
  {
    entered: boolean;
    down: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      entered: false,
      down: false,
    };
  }

  render() {
    const {
      component: C = "div",
      hover = null,
      active = null,
      style = null,
      ...nativeProps
    } = this.props;

    return (
      <C
        style={{
          ...fontFamily,
          ...style,
          ...(this.state.entered && hover),
          ...(this.state.down && active),
        }}
        onMouseEnter={() => this.setState({ entered: true })}
        onMouseLeave={() => this.setState({ entered: false })}
        onMouseDown={() => this.setState({ down: true })}
        onMouseUp={() => this.setState({ down: false })}
        {...nativeProps}
      />
    );
  }
}

// TODO: extract to component. Used now by MediumTopbar
export const AppsMenu = (props) => (
  <PopupRoot>
    <Popup
      style={{
        marginTop: "8px",
        ...(props.visible
          ? {
              visibility: "visible",
              opacity: 1,
              transition: "none",
            }
          : {
              visibility: "hidden",
              opacity: 0,
              transition: "all 120ms ease-in",
            }),
      }}
      component={Outsider}
      onOutsideClick={props.toggle}
      cleanup={!props.visible}
    >
      <menu style={{ margin: 0, padding: 0, minWidth: 180 }}>
        {props.apps.map(({ attributes: { name } }, i) =>
          props.appName !== name ? (
            <HoverableListItem
              component="a"
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                lineHeight: "48px",
                overflow: "hidden",
                verticalAlign: "middle",
                display: "flex",
                height: "48px",
                alignItems: "center",
                ...fontFamily,
                ...(i && { borderTop: "1px solid #ddd" }),
              }}
              key={name}
              href={
                pcoUrl(props.env)("accounts") + getAppsSwitchProductPath(name)
              }
              data-turbolinks={false}
            >
              <ColorAppIcon appName={name.replace(/[\s-]/, "")} size={24} />
              <span style={{ margin: 4 }} />
              <MonoAppName
                appName={name.replace(/[\s-]/, "")}
                color="#444"
                size={24}
              />
            </HoverableListItem>
          ) : (
            <div key={name} style={{ display: "block", position: "relative" }}>
              <HoverableListItem
                component="a"
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  lineHeight: "48px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  display: "flex",
                  height: "48px",
                  alignItems: "center",
                  ...fontFamily,
                  ...(i && { borderTop: "1px solid #ddd" }),
                }}
                href={`${pcoUrl(props.env)(
                  "accounts"
                )}/apps/${name.toLowerCase()}`}
                data-turbolinks={false}
              >
                <ColorAppIcon appName={name.replace(/[\s-]/, "")} size={24} />
                <span style={{ margin: 4 }} />
                <MonoAppName
                  appName={name.replace(/[\s-]/, "")}
                  color="#444"
                  size={24}
                />
              </HoverableListItem>
            </div>
          )
        )}
      </menu>
    </Popup>
  </PopupRoot>
);

const DisclosureChevronIcon = ({
  colors,
  style,
}: {
  colors: any;
  style?: object;
}): JSX.Element => (
  <svg
    style={{
      margin: "-3px",
      ...style,
    }}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    color={colors.base3}
  >
    <title>chevron</title>
    <polygon
      fill="currentColor"
      points="11.931 4.892 8 8.824 4.069 4.892 2.927 6.034 8 11.108 9.142 9.966 13.073 6.034 11.931 4.892"
    />
  </svg>
);

const HelpIcon = ({ colors }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    color={colors.base3}
    style={{ display: "block" }}
  >
    <title>help</title>
    <path
      d="M12,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8.009,8.009,0,0,0,12,4Zm-.342,11.067a1.41,1.41,0,1,0,1.41,1.41A1.41,1.41,0,0,0,11.658,15.067Zm1.914-2.488c1.938-1.885,2.232-3.607.872-5.118A3.37,3.37,0,0,0,11.9,6.307h-.017A5.121,5.121,0,0,0,8.343,7.959L9.817,9.311a3.153,3.153,0,0,1,2.067-1h.008a1.366,1.366,0,0,1,1.065.493c.494.549.517,1.085-.78,2.345A4.612,4.612,0,0,0,10.632,14.2h2A2.733,2.733,0,0,1,13.572,12.579Z"
      fill="currentColor"
    />
  </svg>
);

export const NotificationsMenu = (props) => {
  const Headline = (props) => (
    <h1
      style={{
        color: "#747676",
        fontSize: "12px",
        letterSpacing: "0.15em",
        padding: "4px 16px 0px",
        textTransform: "uppercase",
      }}
      {...props}
    />
  );

  const ShowMoreButton = (props) => (
    <Hoverable hover={{ backgroundColor: "#f7f7f7" }}>
      <p
        style={{
          cursor: "pointer",
          color: "#414141",
          fontSize: "12px",
          fontWeight: 600,
          margin: "0 16px",
          padding: "8px 16px 8px",
          textAlign: "center",
        }}
        {...props}
      >
        Show more...
      </p>
    </Hoverable>
  );

  return (
    <PopupRoot>
      <Popup
        cleanup={!props.visible}
        component={Outsider}
        onOutsideClick={props.toggle}
        style={{
          marginTop: "8px",
          ...(props.visible
            ? { opacity: 1, transition: "none", visibility: "visible" }
            : {
                opacity: 0,
                transition: "all 120ms ease-in",
                visibility: "hidden",
              }),
        }}
      >
        <menu style={{ margin: 0, minWidth: 180, padding: "4px 0" }}>
          <Headline>Unread</Headline>
          {props.notifications.unread.map(({ appName, time, title }, idx) => (
            <NotificationItem {...{ appName, time, title }} />
          ))}
          <Headline>Previous</Headline>
          {props.notifications.read.map(({ appName, time, title }, idx) => (
            <NotificationItem isRead {...{ appName, time, title }} />
          ))}
          <ShowMoreButton />
        </menu>
      </Popup>
    </PopupRoot>
  );
};

export class Outsider extends React.Component<
  {
    component: any;
    cleanup: boolean;
    onOutsideClick: any;
    visible: boolean;
  },
  {}
> {
  private container: HTMLElement;

  constructor(props: any) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, true);
  }

  handleOutsideClick(e) {
    if (this.container.contains(e.target)) return;

    e.stopPropagation();
    e.preventDefault();

    return this.props.onOutsideClick();
  }

  render() {
    const { cleanup, onOutsideClick, visible, ...props } = this.props;

    if (cleanup) {
      document.removeEventListener("click", this.handleOutsideClick, true);
    } else {
      document.addEventListener("click", this.handleOutsideClick, true);
    }

    return <div ref={(c) => (this.container = c)} {...props} />;
  }
}

export class PopupRoot extends React.Component<{ style?: object }, {}> {
  render() {
    const { style = null, ...nativeProps } = this.props;

    return (
      <div
        style={{
          position: "relative",
          alignSelf: "flex-end",
          display: "flex",
          ...style,
        }}
        {...nativeProps}
      />
    );
  }
}

export const Popup: React.StatelessComponent<{
  component?: any;
  style?: object;
  onOutsideClick?: any;
  cleanup?: any;
}> = ({ component: C = "div", style = null, ...nativeProps }) => (
  <C
    style={{
      overflow: "hidden",
      background: "#FFFFFF",
      boxShadow: "0 0 0 1px #D4D9E2, 0 8px 32px rgba(0,0,0,.3)",
      borderRadius: "3px",
      position: "absolute",
      ...style,
    }}
    {...nativeProps}
  />
);

const Notification = ({ notifications = false, style = {}, ...props }) => {
  const colors = {
    // People
    base0: "#5781CF",
    base1: "#3F70CB",
    base2: "#3063BF",
    base3: "#184595",
  };

  return (
    <a
      href="#"
      {...props}
      style={{ alignItems: "center", display: "flex", ...style }}
    >
      <BellIcon dot={notifications} fill={colors.base3} stroke={colors.base0} />
    </a>
  );
};

const NotificationItem = ({
  appName,
  isRead = false,
  title,
  time,
  ...props
}) => {
  return (
    <HoverableListItem
      component="a"
      style={{
        display: "flex",
        alignItems: "flex-start",
        overflow: "hidden",
        padding: "8px 16px",
        textDecoration: "none",
        verticalAlign: "middle",
        width: "280px",
        ...fontFamily,
      }}
      href="#"
      data-turbolinks={false}
    >
      {!isRead && (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: "8px",
            justifyContent: "center",
            lineHeight: "8px",
            marginRight: "8px",
            marginTop: "4px",
            width: "8px",
          }}
        >
          <svg height="8" viewBox="0 0 8 8" width="8">
            <title>unread dot</title>
            <circle cx="4" cy="4" r="4" fill="#2462f5" />
          </svg>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            color: isRead ? "#747676" : "#333",
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "4px",
          }}
        >
          {title}
        </div>
        <div style={{ alignContent: "center", display: "flex" }}>
          {!isRead && (
            <div style={{ marginRight: "4px" }}>
              <ColorAppIcon appName={appName.replace(/[\s-]/, "")} size={12} />
            </div>
          )}
          <div
            style={{
              color: isRead ? "#979797" : "#747676",
              fontSize: "12px",
            }}
          >
            {/* TODO: use datetime and convert readable string */}
            {time}
          </div>
        </div>
      </div>
    </HoverableListItem>
  );
};

export class Topbar extends React.Component<
  {
    apps: { attributes: { name: string; url: string } }[];
    activeRoute: string;
    env: PCO_URL.Environment;
    appName: string;
    routes: any;
    colors: any;
    userAvatarPath: string;
    userId: string;
    userName: string;
    orgName: string;
    connectedPeople: any;
    search?: any;
    style?: any;
    showOrgName?: boolean;
    requestAppsFetch: any;
    requestConnectedPeopleFetch: any;
    requestUnlinkConnectedPeople: any;
    requestSwitchConnectedPerson: any;
    requestClearAppsCache: any;
    requestClearConnectedPeopleCache: any;
    useDummyNotifications: boolean;
    linkToProfile?: boolean;
  },
  {
    appsMenuVisible: boolean;
    notificationsMenuVisible: boolean;
    routesVisible: boolean;
    userMenuVisible: boolean;
    notifications: {
      unread: Notification[];
      read: Notification[];
    };
  }
> {
  public static defaultProps = {
    search: () => null,
    linkToProfile: true,
    showOrgName: true,
    useDummyNotifications: false,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      appsMenuVisible: false,
      notificationsMenuVisible: false,
      routesVisible: true,
      userMenuVisible: false,
      notifications: {
        unread: props.useDummyNotifications ? DUMMY_DATA_UNREAD : [],
        read: props.useDummyNotifications ? DUMMY_DATA_READ : [],
      },
    };

    this.hideRoutes = this.hideRoutes.bind(this);
    this.showRoutes = this.showRoutes.bind(this);
  }

  hideRoutes() {
    return this.setState({ routesVisible: false });
  }

  showRoutes() {
    return this.setState({ routesVisible: true });
  }

  getTextColor() {
    return this.props.colors.text || "#fff";
  }

  componentDidMount() {
    apiRequest(
      defaultFetch,
      `${pcoUrl(this.props.env)("api")}/notifications/v2/me/notifications`
    ).then(({ json }) => {
      this.props.useDummyNotifications ||
        this.setState({ notifications: { unread: [], read: [] } });
    });
  }

  render() {
    const ProfileContainer = ({ component, href, ...nativeProps }) =>
      this.props.linkToProfile ? (
        <HoverableListItem component={component} href={href} {...nativeProps} />
      ) : (
        <div {...nativeProps} />
      );

    return (
      <StyledRoot
        style={{
          paddingLeft: "8px",
          paddingRight: "16px",
          ...this.props.style,
        }}
      >
        <AppsMenu
          env={this.props.env}
          appName={this.props.appName}
          apps={appsMenuFormatter(this.props.apps)}
          visible={this.state.appsMenuVisible}
          toggle={() =>
            this.setState(({ appsMenuVisible }) => ({
              appsMenuVisible: !appsMenuVisible,
            }))
          }
        />

        <AppsButton
          colors={this.props.colors}
          expanded={this.state.appsMenuVisible}
          onClick={() =>
            this.setState(
              ({ appsMenuVisible }) => ({
                appsMenuVisible: !appsMenuVisible,
              }),
              this.props.requestAppsFetch()
            )
          }
          appName={this.props.appName}
        />

        <div style={{ margin: "12px" }} />

        {this.state.routesVisible && this.props.routes}

        <div style={{ margin: "auto" }} />

        <NotificationsMenu
          env={this.props.env}
          notifications={this.state.notifications}
          toggle={() =>
            this.setState(({ notificationsMenuVisible }) => ({
              notificationsMenuVisible: !notificationsMenuVisible,
            }))
          }
          visible={this.state.notificationsMenuVisible}
        />

        <Hoverable
          active={{ backgroundColor: this.props.colors.base2 }}
          hover={{ backgroundColor: this.props.colors.base1 }}
          onClick={() =>
            this.setState(({ notificationsMenuVisible }) => ({
              notificationsMenuVisible: !notificationsMenuVisible,
            }))
          }
          style={{
            alignItems: "center",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            padding: "4px",
            ...slightBackgroundTransition,
          }}
        >
          <Notification
            notifications={this.state.notifications.unread.length > 0}
          />
        </Hoverable>

        {this.props.search({
          hideRoutes: this.hideRoutes,
          showRoutes: this.showRoutes,
        })}

        <div
          style={{
            marginLeft: "16px",
            position: "relative",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          <Hoverable
            component="button"
            type="button"
            style={{
              outline: 0, // TODO: #improve-outline-a11y
              cursor: "pointer",
              border: "none",
              padding: 0,
              appearance: "none",
              WebkitAppearance: "none",
              alignItems: "center",
              lineHeight: "32px",
              fontSize: "13px",
              borderRadius: "9999px",
              color: this.getTextColor(),
              backgroundColor: this.props.colors.base1,
              display: "flex",
              ...slightBackgroundTransition,
            }}
            active={{ backgroundColor: this.props.colors.base3 }}
            hover={{ backgroundColor: this.props.colors.base2 }}
            onClick={() =>
              this.setState(
                ({ userMenuVisible }) => ({
                  userMenuVisible: !userMenuVisible,
                }),
                this.props.requestConnectedPeopleFetch()
              )
            }
          >
            <Avatar env={this.props.env} url={this.props.userAvatarPath} />

            {this.props.showOrgName && this.props.connectedPeople.length ? (
              <div
                style={{
                  margin: "0 8px 0 8px",
                  fontSize: "13px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "240px",
                }}
              >
                {this.props.orgName}
              </div>
            ) : (
              <div
                style={{
                  margin: "0 4px 0 4px",
                }}
              />
            )}
            <div style={{ paddingRight: "8px" }}>
              <DisclosureChevronIcon colors={this.props.colors} />
            </div>
          </Hoverable>
        </div>

        <PopupRoot>
          <Popup
            component={Outsider}
            onOutsideClick={() =>
              this.setState(({ userMenuVisible }) => ({
                userMenuVisible: !userMenuVisible,
              }))
            }
            cleanup={!this.state.userMenuVisible}
            style={{
              color: "#525252",
              right: 0,
              marginTop: "8px",
              maxWidth: "320px",
              ...(this.state.userMenuVisible
                ? {
                    visibility: "visible",
                    opacity: 1,
                    transition: "none",
                  }
                : {
                    visibility: "hidden",
                    opacity: 0,
                    transition: "all 120ms ease-in",
                  }),
              cursor: "default",
            }}
          >
            <div>
              <ProfileContainer
                component="a"
                href={`/people/AC${this.props.userId}`}
                data-turbolinks={false}
                style={{
                  display: "block",
                  padding: "16px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      ...IEFlex1,
                      ...fontFamily,
                      maxWidth: "240px",
                      marginRight: 8,
                      color: "#444",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {this.props.userName}
                    </div>
                  </div>

                  {this.props.linkToProfile && (
                    <small
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        ...fontFamily,
                      }}
                    >
                      profile
                    </small>
                  )}
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#666",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    ...fontFamily,
                  }}
                >
                  {this.props.orgName}
                </div>
              </ProfileContainer>

              {this.props.connectedPeople.length ? (
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#eee",
                    alignItems: "center",
                    borderTop: "1px solid #ddd",
                    lineHeight: "32px",
                    padding: "0 16px",
                  }}
                >
                  <div
                    style={{
                      ...IEFlex1,
                      textTransform: "uppercase",
                      color: "#666",
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                      ...fontFamily,
                    }}
                  >
                    Linked Accounts
                  </div>

                  <div
                    style={{
                      ...IEFlex1,
                      textAlign: "right",
                      alignItems: "center",
                      fontSize: "12px",
                    }}
                  >
                    <a
                      href=""
                      onClick={(e) => {
                        this.props.requestClearAppsCache();
                        this.props.requestClearConnectedPeopleCache();
                        this.props.requestUnlinkConnectedPeople();
                        e.preventDefault();
                      }}
                      style={{
                        color: "#666",
                        textDecoration: "none",
                        marginLeft: "64px",
                        ...fontFamily,
                      }}
                    >
                      unlink
                    </a>
                  </div>
                </div>
              ) : (
                <noscript />
              )}

              <style>{`
                .NotSmallTopbar__connected-people-list > *:first-child > * { border-top-width: 0 !important }
              `}</style>
              <ul
                className="NotSmallTopbar__connected-people-list"
                style={{ margin: 0, padding: 0, listStyleType: "none" }}
              >
                {connectedPeopleMenuFormatter(this.props.connectedPeople).map(
                  ({ id, attributes: person }) => (
                    <HoverableListItem component="li" key={id}>
                      <a
                        href=""
                        onClick={(e) => {
                          this.props.requestClearAppsCache();
                          this.props.requestClearConnectedPeopleCache();
                          this.props.requestSwitchConnectedPerson(
                            id,
                            `${this.props.appName}/`
                          );
                          e.preventDefault();
                        }}
                        style={{
                          marginLeft: "16px",
                          paddingRight: "16px",
                          lineHeight: "48px",
                          display: "block",
                          color: "#444",
                          whiteSpace: "nowrap",
                          borderTop: "1px solid #ddd",
                          textDecoration: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          ...fontFamily,
                        }}
                      >
                        {person.organization_name}
                      </a>
                    </HoverableListItem>
                  )
                )}
              </ul>
            </div>

            <HoverableListItem
              component="a"
              href={`${pcoUrl(this.props.env)("login")}/logout`}
              onClick={() => {
                this.props.requestClearAppsCache();
                this.props.requestClearConnectedPeopleCache();
                return;
              }}
              data-turbolinks={false}
              style={{
                textAlign: "center",
                borderTop: "1px solid #ddd",
                lineHeight: "48px",
                display: "block",
                color: "#444",
                textDecoration: "none",
                ...fontFamily,
              }}
            >
              <svg
                style={{ marginRight: "12px" }}
                width="12px"
                height="10px"
                viewBox="0 0 12 10"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Results-Copy"
                    transform="translate(-113.000000, -252.000000)"
                    fill="#444"
                  >
                    <path
                      d="M124.327628,256.578333 L122.013462,254.285 C121.870962,254.143333 121.683462,254.061667 121.486795,254.053333 C121.282628,254.045 121.092628,254.118333 120.950962,254.258333 C120.666795,254.54 120.666795,255.004167 120.950962,255.285833 L121.974295,256.255 L117.971795,256.255 C117.926795,256.255 117.884295,256.26 117.841795,256.268333 C117.489295,256.33 117.220962,256.633333 117.220962,257 C117.220962,257.410833 117.557628,257.745 117.971795,257.745 L121.990128,257.745 L120.950962,258.820833 C120.815128,258.955833 120.731795,259.1675 120.731795,259.374167 C120.731795,259.575833 120.813462,259.7775 120.950962,259.914167 C121.092628,260.055 121.281795,260.133333 121.480962,260.135833 C121.682628,260.1375 121.871795,260.061667 122.013462,259.920833 L124.327628,257.63 C124.610962,257.348333 124.610962,256.859167 124.327628,256.578333 M116.804167,260.523333 C116.7625,260.515 116.719167,260.510833 116.674167,260.510833 L114.5025,260.510833 L114.5025,253.489167 L116.6475,253.489167 C117.061667,253.489167 117.399167,253.155833 117.399167,252.745 C117.399167,252.378333 117.13,252.074167 116.7775,252.0125 C116.735,252.004167 116.6925,252 116.6475,252 L113.965,252 C113.540833,252 113,252.5075 113,252.904167 L113,261.308333 C113,261.736667 113.5625,262 113.965,262 L116.674167,262 C117.088333,262 117.425,261.665833 117.425,261.255 C117.425,260.889167 117.156667,260.585 116.804167,260.523333"
                      id="Fill-1"
                    />
                  </g>
                </g>
              </svg>
              Log out
            </HoverableListItem>
          </Popup>
        </PopupRoot>

        <Unbutton style={{ marginLeft: "16px" }} id="jsLaunchHelpdesk">
          <HelpIcon colors={this.props.colors} />
        </Unbutton>
      </StyledRoot>
    );
  }
}

export class Route extends React.Component<
  {
    active: boolean;
    colors: any;
    style?: object;
    href?: string;
  },
  {
    entered: boolean;
    down: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      entered: false,
      down: false,
    };
  }

  render() {
    const { active, colors, style = null, ...nativeProps } = this.props;

    const getBackgroundColor = () => {
      if (this.state.entered && this.state.down) return colors.base2;
      if (this.state.entered || active) return colors.base1;
      return "transparent";
    };

    const getTextColor = () => {
      return colors.text || "#fff";
    };

    return (
      <a
        style={{
          lineHeight: "32px",
          marginRight: "4px", // off-grid
          verticalAlign: "middle",
          borderRadius: "9999px",
          paddingLeft: "12px",
          paddingRight: "12px",
          fontSize: "14px",
          color: getTextColor(),
          fontWeight: 600,
          textDecoration: "none",
          textTransform: "capitalize",
          backgroundColor: getBackgroundColor(),
          ...fontFamily,
          ...slightBackgroundTransition,
          ...style,
        }}
        onMouseEnter={() => this.setState({ entered: true })}
        onMouseLeave={() => this.setState({ entered: false })}
        onMouseDown={() => this.setState({ down: true })}
        onMouseUp={() => this.setState({ down: false })}
        {...nativeProps}
      />
    );
  }
}
