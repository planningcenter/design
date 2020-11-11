import * as React from "react";
import { PointBreak } from "./display_switch";
import pcURL from "./pco_url";
import { X as XSymbol } from "./symbols";
import apiRequest, { Fetch, defaultFetch } from "./api_request";

const entries = function (obj) {
  var ownProps = Object.keys(obj),
    i = ownProps.length,
    resArray = new Array(i); // preallocate the Array
  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

  return resArray;
};

function formatter(announcements) {
  return entries(announcements).map((entry) => ({
    id: entry[0],
    data: entry[1],
  }));
}

class Provider extends React.Component<
  {
    env: string;
    formatter?: any;
    authenticatedFetch: Fetch;
    children: (announcements: any, callback: any) => React.ReactElement<any>;
    initialAnnouncements: object;
  },
  {
    announcements: object[];
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      announcements: props.initialAnnouncements,
    };
  }

  public static defaultProps = {
    formatter: formatter,
  };

  dismissAnnouncements(id) {
    this.setState(({ announcements }) => {
      const newAnnouncements = announcements;
      if (announcements[id]) delete newAnnouncements[id];

      return { announcements: newAnnouncements };
    });

    return apiRequest(
      this.props.authenticatedFetch,
      `${pcURL(this.props.env)(
        "api"
      )}/people/v2/me/platform_notifications/${id}/dismiss`,
      { method: "POST" }
    );
  }

  render() {
    return this.props.children(
      { announcements: this.props.formatter(this.state.announcements) },
      { dismissAnnouncements: this.dismissAnnouncements.bind(this) }
    );
  }
}

export class StyledAnnouncement extends React.Component<
  { style?: object },
  {}
> {
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

export class StyleProvider extends React.Component<
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
        className={["__Topbar_PlatformAnnouncements_link"].join(" ").trim()}
        style={{
          color: "white",
          backgroundColor: "#282828",
          fontSize: "14px",
          ...style,
        }}
        {...platformProps}
      >
        <style>{`
            .__Topbar_PlatformAnnouncements_link { color: white }
            .__Topbar_PlatformAnnouncements_link a { color: ${colors.base0} }
            .__Topbar_PlatformAnnouncements_link a:hover { color: ${colors.base1} }
            .__Topbar_PlatformAnnouncements_link a:active { color: ${colors.base2} }
          `}</style>
        {children}
      </div>
    );
  }
}

export default class PlatformAnnouncements extends React.Component<
  {
    colors: any;
    env: string;
    data: object;
    renderItem?: any;
    authenticatedFetch?: Fetch;
  },
  {}
> {
  public static defaultProps = {
    renderItem: ({ announcement, actions }) => (
      <DissmissibleAnnouncement
        key={announcement.id}
        html={announcement.data.html}
        onClick={() => actions.dismissAnnouncements(announcement.id)}
      />
    ),
    authenticatedFetch: defaultFetch,
  };

  render() {
    return (
      <StyleProvider colors={this.props.colors}>
        <Provider
          env={this.props.env}
          initialAnnouncements={this.props.data}
          authenticatedFetch={this.props.authenticatedFetch}
        >
          {(data, actions) =>
            Boolean(data.announcements.length > 0) ? (
              <div>
                {data.announcements.map((announcement) =>
                  this.props.renderItem({ announcement, actions })
                )}
              </div>
            ) : null
          }
        </Provider>
      </StyleProvider>
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

function DissmissibleAnnouncement(props: {
  html: string;
  onClick: () => any;
}): JSX.Element {
  return (
    <StyledAnnouncement>
      <span
        dangerouslySetInnerHTML={{
          __html: props.html,
        }}
      />

      <StyledDismissButton onClick={props.onClick} />
    </StyledAnnouncement>
  );
}
