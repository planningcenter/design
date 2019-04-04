import * as React from "react";

/* ! copy-pasted from react-overflowing for easy customization before adding as dep */
export class EdgeGradient extends React.Component {
  render() {
    const { gap, direction, edge, style, ...nativeProps } = this.props;

    return (
      <div
        {...nativeProps}
        style={{
          width: gap / 12 < 16 ? gap / 12 : 16,
          height: "100%",
          position: "absolute",
          backgroundColor: "red",
          top: 0,
          [edge]: 0,
          background: `linear-gradient(to ${direction}, rgba(0,0,0, .075), transparent)`,
          ...style
        }}
      />
    );
  }
}

/* ! copy-pasted from react-overflowing for easy customization before adding as dep */
export class Overflowing extends React.Component {
  constructor() {
    super();
    this.state = { left: 0, right: 0 };

    this.handleOverflow = this.handleOverflow.bind(this);
  }

  componentDidMount() {
    // HACK: provide a better hook for updating with async content
    setTimeout(this.handleOverflow, 500);
    window.addEventListener("resize", this.handleOverflow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleOverflow);
  }

  handleOverflow() {
    this.setState({
      left: this.containerEl.scrollLeft,
      right:
        this.containerEl.scrollWidth -
        this.containerEl.offsetWidth -
        this.containerEl.scrollLeft
    });
  }

  render() {
    const { children, style, renderRoot, ...nativeProps } = this.props;

    return renderRoot({
      style: { position: "relative" },
      children: [
        Boolean(this.state.right) && (
          <EdgeGradient
            key="Overflowing-left-EdgeGradient"
            gap={this.state.right}
            direction="left"
            edge="right"
          />
        ),
        <div
          key="Overflowing-main-content"
          ref={el => (this.containerEl = el)}
          {...nativeProps}
          style={{
            overflow: "auto",
            ...style
          }}
          onScroll={this.handleOverflow}
        >
          <div ref={el => (this.innerEl = el)}>{children}</div>
        </div>,
        Boolean(this.state.left) && (
          <EdgeGradient
            key="Overflowing-right-EdgeGradient"
            gap={this.state.left}
            direction="right"
            edge="left"
          />
        )
      ]
    });
  }
}
Overflowing.defaultProps = {
  renderRoot: props => <div {...props} />
};

export default Overflowing;
