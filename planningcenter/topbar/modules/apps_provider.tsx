import * as React from "react";
import pcoUrl from "./pco_url";
import apiRequest, { Fetch, defaultFetch } from "./api_request";

export class AppsProvider extends React.Component<
  {
    env: string;
    formatter?: any;
    configuredFetch?: Fetch;
    render: (apps: object[], callback: any) => React.ReactElement<any>;
  },
  {
    apps: object[];
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      apps: [],
    };
  }

  public static defaultProps = {
    formatter: mapApps,
    configuredFetch: defaultFetch,
  };

  fetch() {
    apiRequest(
      this.props.configuredFetch,
      `${pcoUrl(this.props.env)("api")}/people/v2/me/apps`
    ).then(({ json }) => {
      const apps = this.props.formatter(json.data);

      return this.setState({ apps }, () =>
        window.localStorage.setItem("Topbar:Apps", JSON.stringify(apps))
      );
    });
  }

  remove() {
    window.localStorage.removeItem("Topbar:Apps");
  }

  componentDidMount() {
    const apps = JSON.parse(window.localStorage.getItem("Topbar:Apps"));

    if (apps) return this.setState({ apps });

    return this.fetch();
  }

  render() {
    return this.props.render(this.state.apps || [], {
      fetch: this.fetch.bind(this),
      remove: this.remove.bind(this),
    });
  }
}

interface App {
  attributes: { name: string; url: string };
}

export function mapResourcesToCalendar(apps: App[]) {
  return apps.map((app: App) => {
    if (app.attributes.name === "Resources") {
      return {
        ...app,
        attributes: { ...app.attributes, name: "Calendar" },
      };
    }

    return app;
  }, []);
}

export function mapApps(apps: App[]) {
  return apps;
}
