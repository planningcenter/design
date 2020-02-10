import * as React from "react";

import pcoUrl from "./pco_url";
import { StyledRoot } from "./styled_root";
import { Unbutton } from "./unbutton";
import { Avatar } from "./avatar";
import { ClientStorage as LocalStorageProvider } from "./client_storage";
import { appsMenuFormatter, connectedPeopleMenuFormatter } from "./formatters";
import { IEFlex1, fontFamily } from "./styles";
import { MonoAppIcon } from "./mono_app_icon";
import { MonoAppName } from "./mono_app_name";
import { ColorAppIcon } from "./color_app_icon";

const MENU_GUTTER = 57;

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const DisclosureChevronIcon = (props) => (
  <svg
    style={{
      marginLeft: "4px",
      verticalAlign: "middle",
    }}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    {...props}
  >
    <title>chevron</title>
    <polygon
      fill="currentColor"
      points="11.931 4.892 8 8.824 4.069 4.892 2.927 6.034 8 11.108 9.142 9.966 13.073 6.034 11.931 4.892"
    />
  </svg>
);

function UserMenuAppLockup(props) {
  let appName = props.appName.replace(/[\s-]/, "");

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ColorAppIcon appName={appName} size={28} />
      <span style={{ marginLeft: "12px" }} />
      <MonoAppName appName={appName} color="#fff" size={28} />
    </div>
  );
}

export class Topbar extends React.Component<
  {
    apps: { attributes: { name: string; url: string } }[];
    env: string;
    appName: string;
    routes: any;
    colors: any;
    userAvatarPath: string;
    userId: string;
    userName: string;
    orgName: string;
    connectedPeople: {
      id: number;
      attributes: { name: string; organization_name: string };
    }[];
    style?: any;
    currentRouteComponent?: any;
    requestAppsFetch: any;
    requestConnectedPeopleFetch: any;
    requestClearAppsCache: any;
    requestClearConnectedPeopleCache: any;
    notifications?: any;
  },
  {
    routesMenuVisible: boolean;
    userMenuVisible: boolean;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      routesMenuVisible: false,
      userMenuVisible: false,
    };
  }

  public static defaultProps = {
    currentRouteComponent: (props) => <span {...props} />,
  };

  componentDidUpdate() {
    return this.state.userMenuVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }

  render() {
    const activeRoute =
      this.props.routes.filter(({ props }) => props.active) || [];

    const CurrentRouteComponent = this.props.currentRouteComponent;
    const currentRouteText =
      (activeRoute &&
        activeRoute[0] &&
        activeRoute[0].props &&
        activeRoute[0].props.children) ||
      this.props.appName;

    return (
      <StyledRoot style={{ ...this.props.style }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "48px",
            paddingLeft: "16px",
            paddingRight: "16px",
            justifyContent: "center",
          }}
          onClick={() => {
            this.props.requestAppsFetch();
            this.props.requestConnectedPeopleFetch();

            return this.setState(({ userMenuVisible }) =>
              userMenuVisible
                ? {
                    routesMenuVisible: false,
                    userMenuVisible: false,
                  }
                : {
                    routesMenuVisible: false,
                    userMenuVisible: true,
                  },
            );
          }}
        >
          <MonoAppIcon
            appName={this.props.appName.replace(/[\s-]/, "")}
            colors={this.props.colors}
            size={26}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            top: "48px",
            width: "100%",
          }}
        >
          {this.state.routesMenuVisible && this.props.routes}
        </div>

        <LocalStorageProvider
          item="Topbar:Small:Menus:User:visibility"
          render={(userSwitchState = false, lsUpdate) => (
            <div
              style={{
                display: this.state.userMenuVisible ? "block" : "none",
                position: "fixed",
                color: "black",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.25)",
                msUserSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
              }}
              onClick={() =>
                this.setState(({ userMenuVisible }) => ({
                  userMenuVisible: !userMenuVisible,
                }))
              }
            >
              <div
                style={{
                  position: "absolute",
                  top: "11px",
                  right: "17px",
                  color: "white",
                }}
              >
                <svg
                  x="0px"
                  y="0px"
                  width="23.4px"
                  height="23.3px"
                  viewBox="0 0 23.4 23.3"
                >
                  <polygon
                    fill="#fff"
                    points="11.7,9.5 7.2,5 5.1,7.1 9.6,11.6 5,16.2 7.1,18.3 11.7,13.7 16.2,18.3 18.4,16.2 13.8,11.6 18.3,7.1 16.2,5 "
                  />
                </svg>
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  height: "100%",
                  width: `calc(100% - ${MENU_GUTTER}px)`,
                  backgroundColor: "#424242", // "white"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#363636",
                    height: "48px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    borderBottom: "1px solid #363636",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ ...IEFlex1 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <UserMenuAppLockup appName={this.props.appName} />
                    </div>
                  </div>

                  <div onClick={() => lsUpdate(!userSwitchState)}>
                    <div
                      style={{
                        lineHeight: "32px",
                        fontSize: "13px",
                        borderRadius: "9999px",
                        backgroundColor: userSwitchState
                          ? "transparent"
                          : "#292929",
                        boxShadow: `0 0 0 1px ${
                          userSwitchState ? this.props.colors.base1 : "#292929"
                        }`,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        env={this.props.env}
                        url={this.props.userAvatarPath}
                      />

                      <div style={{ paddingRight: "8px" }}>
                        <DisclosureChevronIcon
                          color={
                            userSwitchState
                              ? this.props.colors.base1
                              : "#575757"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    ...IEFlex1,
                    overflowY: "scroll",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  <ul style={{ padding: 0, margin: 0 }}>
                    {appsMenuFormatter(this.props.apps).map(
                      ({ attributes: { name } }) => (
                        <li
                          key={name}
                          style={{
                            listStyleType: "none",
                            borderTop: "1px solid #363636",
                          }}
                        >
                          <a
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "48px",
                              paddingLeft: "16px",
                              paddingRight: "16px",
                            }}
                            data-turbolinks={false}
                            href={`${pcoUrl(this.props.env)(
                              "accounts",
                            )}/apps/${name.toLowerCase()}`}
                          >
                            <UserMenuAppLockup appName={name} />
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                  <div
                    style={{
                      display: userSwitchState ? "block" : "none",
                      background: "#FFFFFF",
                      boxShadow: "0 4px 7px 0 rgba(0,0,0,0.40)",
                      borderRadius: "3px",
                      position: "absolute",
                      right: "12px",
                      top: "60px",
                      width: "calc(100% - 68px)",
                      height: "calc(100% - 124px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        overflowY: "scroll",
                        WebkitOverflowScrolling: "touch",
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          padding: "16px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "15px",
                            lineHeight: "16px",
                            marginBottom: "8px",
                          }}
                        >
                          <strong>{this.props.userName}</strong>
                        </div>
                        <div style={{ lineHeight: "16px", color: "#444" }}>
                          {this.props.orgName}
                        </div>
                      </div>

                      <div style={{ ...IEFlex1 }}>
                        <style>{`.SmallTopbar__connected-people-list > *:first-child > * { border-top-width: 0 !important }`}</style>
                        <ul
                          className="SmallTopbar__connected-people-list"
                          style={{
                            margin: 0,
                            padding: 0,
                            listStyleType: "none",
                            borderTop: "1px solid #F2F2F2",
                            fontSize: "15px",
                          }}
                        >
                          {connectedPeopleMenuFormatter(
                            this.props.connectedPeople,
                          ).map(({ id, attributes: person }) => (
                            <li key={id}>
                              <a
                                href={`${pcoUrl(this.props.env)(
                                  "accounts",
                                )}/link/new?to=${id}&return=${
                                  this.props.appName
                                }%2f`}
                                data-turbolinks={false}
                                onClick={() => {
                                  this.props.requestClearAppsCache();
                                  this.props.requestClearConnectedPeopleCache();
                                  return;
                                }}
                                style={{
                                  maxWidth: "100%",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  marginLeft: "16px",
                                  paddingRight: "16px",
                                  lineHeight: "48px",
                                  display: "block",
                                  color: "#444",
                                  borderTop: "1px solid #ddd",
                                }}
                              >
                                {person.organization_name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        {this.props.connectedPeople.length > 0 && (
                          <a
                            href={`${pcoUrl(this.props.env)(
                              "accounts",
                            )}/unlink`}
                            onClick={() => {
                              this.props.requestClearAppsCache();
                              this.props.requestClearConnectedPeopleCache();
                              return;
                            }}
                            style={{
                              display: "block",
                              fontSize: "15px",
                              textAlign: "center",
                              borderTop: "1px solid #F2F2F2",
                              lineHeight: "48px",
                              color: "#ef5433",
                            }}
                          >
                            Unlink My Accounts
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #363636",
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    lineHeight: "48px",
                  }}
                >
                  <div
                    style={{
                      ...IEFlex1,
                      borderRight: "1px solid #363636",
                    }}
                  >
                    <Unbutton
                      style={{
                        color: "white",
                        fontWeight: 600,
                        fontSize: "15px",
                        letterSpacing: "-.05em",
                      }}
                      id="jsLaunchHelpdesk"
                    >
                      Help
                    </Unbutton>
                  </div>

                  <div style={{ ...IEFlex1 }}>
                    <a
                      href={`${pcoUrl(this.props.env)("login")}/logout`}
                      onClick={() => {
                        this.props.requestClearAppsCache();
                        this.props.requestClearConnectedPeopleCache();
                        return;
                      }}
                      data-turbolinks={false}
                      style={{
                        color: "white",
                        fontWeight: 600,
                        fontSize: "15px",
                        letterSpacing: "-.05em",
                        textDecoration: "none",
                      }}
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        />

        <div
          style={{
            ...IEFlex1,
            textAlign: "center",
            fontWeight: 600,
            lineHeight: "48px",
          }}
          onClick={() =>
            this.setState(({ routesMenuVisible }) =>
              routesMenuVisible
                ? {
                    routesMenuVisible: false,
                    userMenuVisible: false,
                  }
                : {
                    routesMenuVisible: true,
                    userMenuVisible: false,
                  },
            )
          }
        >
          <CurrentRouteComponent>
            {capitalize(currentRouteText)}
          </CurrentRouteComponent>
          <DisclosureChevronIcon color={this.props.colors.base3} />
        </div>
        <div>
          {this.props.notifications ? (
            this.props.notifications()
          ) : (
            <div style={{ width: "48px" }} />
          )}
        </div>
      </StyledRoot>
    );
  }
}

export const Route = ({ active, ...props }) => (
  <a
    style={{
      display: "block",
      backgroundColor: "#444",
      borderBottom: "1px solid #333",
      color: "#fff",
      fontWeight: 600,
      textTransform: "capitalize",
      textDecoration: "none",
      lineHeight: "47px",
      textAlign: "center",
      ...fontFamily,
      ...(active && { backgroundColor: "#333" }),
    }}
    {...props}
  />
);
