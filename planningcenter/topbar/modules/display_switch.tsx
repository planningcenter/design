import * as React from "react";

const debounce = (func, wait) => {
  let timeout;

  return function() {
    const context = this,
      args = arguments;

    const later = () => {
      timeout = null;
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (!timeout) {
      func.apply(context, args);
    }
  };
};

export class PointBreak extends React.Component<
  {
    render: (breakpoint: string) => React.ReactElement<any>;
  },
  {
    width: number;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      width: window.innerWidth,
    };

    this.setWindowWidth = this.setWindowWidth.bind(this);
  }

  setWindowWidth() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(this.setWindowWidth, 100),
      false,
    );
  }

  componentDidUnMount() {
    window.removeEventListener(
      "resize",
      debounce(this.setWindowWidth, 100),
      false,
    );
  }

  breakpointString(width) {
    if (width < 480) return "xs";
    if (width < 600) return "sm";
    if (width < 720) return "md";
    if (width < 960) return "lg";
    return "xl";
  }

  render() {
    return this.props.render(this.breakpointString(this.state.width));
  }
}

export class DisplaySwitch extends React.Component<
  {
    smallBreakpoints: String[];
    smallTopbar: (breakpointShorthand: string) => React.ReactElement<any>;
    notSmallTopbar: (breakpointShortand: string) => React.ReactElement<any>;
  },
  {}
> {
  public static defaultProps = {
    smallBreakpoints: ["xs", "sm"],
  };

  render() {
    return (
      <PointBreak
        render={(breakpoint) => {
          if (this.props.smallBreakpoints.indexOf(breakpoint) !== -1) {
            return this.props.smallTopbar(breakpoint);
          }

          return this.props.notSmallTopbar(breakpoint);
        }}
      />
    );
  }
}
