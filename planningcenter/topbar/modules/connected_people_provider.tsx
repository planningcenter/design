import * as React from "react";
import pcoUrl from "./pco_url";
import defaultApiRequest, { ApiRequest } from "./api_request";

export class ConnectedPeopleProvider extends React.Component<
  {
    env: string;
    apiRequest?: ApiRequest;
    render: (
      connectedPeople: object[],
      callback: any,
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
    apiRequest: defaultApiRequest,
  };

  fetch() {
    this.props
      .apiRequest(
        `${pcoUrl(this.props.env)("api")}/people/v2/me/connected_people`
      )
      .then(({ json }) => {
        const connectedPeople = json.data;

        return this.setState(
          {
            connectedPeople,
          },
          () =>
            window.localStorage.setItem(
              "Topbar:ConnectedPeople",
              JSON.stringify(connectedPeople),
            ),
        );
      });
  }

  remove() {
    window.localStorage.removeItem("Topbar:ConnectedPeople");
  }

  unlink() {
    this.props
      .apiRequest(`${pcoUrl(this.props.env)("api")}/login/v2/me/unlink`, {
        method: "POST",
      })
      .then(({ json }) => {
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
    });
  }
}
