import * as React from "react";
import { StyledRoot } from "./styled_root";
import { Avatar } from "./avatar";
import { MonoAppIcon } from "./mono_app_icon";
import { Unbutton } from "./unbutton";
import { IEFlex1, fontFamily } from "./styles";

// TODO: Duped from small_topbar
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

// TODO: Duped from small_topbar
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// TODO: Duped from not_small_topbar
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

export class Topbar extends React.Component<
  {
    appName: string;
    colors: any;
    env: string;
    routes: any;
    userAvatarPath: string;
    currentRouteComponent?: any;
  },
  {
    routesMenuVisible: boolean;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      routesMenuVisible: true,
    };
  }

  public static defaultProps = {
    currentRouteComponent: (props) => <span {...props} />,
  };

  render() {
    const activeRoute =
      this.props.routes.filter(({ props }) => props.active) || [];

    const currentRouteText =
      (activeRoute &&
        activeRoute[0] &&
        activeRoute[0].props &&
        activeRoute[0].props.children) ||
      this.props.appName;

    // TODO: Duped from small_topbar
    const CurrentRouteComponent = this.props.currentRouteComponent;

    return (
      <StyledRoot
        style={{
          paddingLeft: 24,
          paddingRight: 24,
          justifyContent: "space-between",
        }}
      >
        {/* TODO: make this a popup menu */}
        <div>
          <MonoAppIcon
            appName={this.props.appName.replace(/[\s-]/, "")}
            colors={this.props.colors}
            size={26}
          />
        </div>
        <div
          style={{
            ...IEFlex1,
            textAlign: "center",
            fontWeight: 600,
            lineHeight: "48px",
            marginRight: "-48px", // HACK: static
          }}
          onClick={() =>
            this.setState(({ routesMenuVisible }) =>
              routesMenuVisible
                ? {
                    routesMenuVisible: false,
                  }
                : {
                    routesMenuVisible: true,
                  },
            )
          }
        >
          <CurrentRouteComponent>
            {capitalize(currentRouteText)}
          </CurrentRouteComponent>

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
          <DisclosureChevronIcon color={this.props.colors.base3} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Unbutton style={{ marginRight: "16px" }} id="jsLaunchHelpdesk">
            <HelpIcon colors={this.props.colors} />
          </Unbutton>
          <Avatar env={this.props.env} url={this.props.userAvatarPath} />
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
