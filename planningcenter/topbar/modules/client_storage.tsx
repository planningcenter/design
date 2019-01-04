import * as React from "react";

export class ClientStorage extends React.Component<
  {
    item: string;
    method?: "localStorage" | "sessionStorage";
    render: (apps: any, other: any) => React.ReactElement<any>;
  },
  {}
> {
  public static defaultProps = {
    method: "localStorage",
  };

  update(value) {
    window[this.props.method].setItem(this.props.item, JSON.stringify(value));
    return this.forceUpdate();
  }

  render() {
    return this.props.render(
      JSON.parse(window[this.props.method].getItem(this.props.item)) ||
        undefined,
      this.update.bind(this),
    );
  }
}
