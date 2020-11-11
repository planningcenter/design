import * as React from "react";
import pcoUrl from "./pco_url";
import apiRequest, { Fetch, defaultFetch } from "./api_request";

export class ConnectedPeopleProvider extends React.Component<
  {
    env: string;
    authenticatedFetch?: Fetch;
    render: (
      connectedPeople: object[],
      callback: any
    ) => React.ReactElement<any>;
  },
  {
    connectedPeople: object[];
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      connectedPeople: [],
    };
  }

  public static defaultProps = {
    authenticatedFetch: defaultFetch,
  };

  fetch() {
    apiRequest(
      this.props.authenticatedFetch,
      `${pcoUrl(this.props.env)("api")}/login/v2/me/connected_people`
    ).then(({ json }) => {
      const connectedPeople = json.data;

      return this.setState(
        {
          connectedPeople,
        },
        () =>
          window.localStorage.setItem(
            "Topbar:ConnectedPeople",
            JSON.stringify(connectedPeople)
          )
      );
    });
  }

  remove() {
    window.localStorage.removeItem("Topbar:ConnectedPeople");
  }

  unlink() {
    apiRequest(
      this.props.authenticatedFetch,
      `${pcoUrl(this.props.env)("api")}/login/v2/me/unlink`,
      {
        method: "POST",
      }
    ).then(({ json }) => {
      window.location = json.meta.redirect_to;
    });
  }

  switch(toId: string, returnPath: string) {
    apiRequest(
      this.props.authenticatedFetch,
      `${pcoUrl(this.props.env)("api")}/login/v2/me/switch_connected_person`,
      {
        method: "POST",
        data: {
          data: {
            attributes: {
              id: toId,
              return_path: returnPath,
            },
          },
        },
      }
    ).then(({ json }) => {
      window.location = json.meta.redirect_to;
    });
  }

  componentDidMount() {
    const connectedPeople = JSON.parse(
      window.localStorage.getItem("Topbar:ConnectedPeople"),
    );

    if (connectedPeople) return this.setState({ connectedPeople });

    return this.fetch();
  }

  render() {
    return this.props.render(this.state.connectedPeople || [], {
      fetch: this.fetch.bind(this),
      remove: this.remove.bind(this),
      unlink: this.unlink.bind(this),
      switch: this.switch.bind(this),
    });
  }
}
