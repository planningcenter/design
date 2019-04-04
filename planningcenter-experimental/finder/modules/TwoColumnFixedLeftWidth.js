import React from "react";

export class TwoColumnFixedLeftWidth extends React.Component {
  static defaultProps = {
    leftWidth: 240,
    left: () => <div>Left side!</div>,
    right: () => <div>Right side!</div>
  };

  render() {
    const { left, leftWidth, right, ...nativeProps } = this.props;

    return (
      <div {...nativeProps}>
        <div style={{ width: leftWidth }}>{left()}</div>
        <div style={{ width: `calc(100% - ${leftWidth}px)` }}>{right()}</div>
      </div>
    );
  }
}

export default TwoColumnFixedLeftWidth