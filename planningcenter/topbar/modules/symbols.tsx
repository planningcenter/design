import * as React from "react";

export const Bell: React.StatelessComponent<{
  dot?: boolean;
  dotFill?: string;
  fill?: string;
  stroke?: string;
  style?: object;
}> = ({
  dot = false,
  fill = "#fff",
  dotFill = "#FFDC51",
  stroke = "#000",
  style,
  ...props
}) => {
  const bellPath = (
    <path
      d="M21.482,16.626,19.1,13.649V9a7,7,0,0,0-14,0v4.649L2.478,16.929A1.89,1.89,0,0,0,3.952,20H9.285a2.983,2.983,0,0,0,5.633,0H19.86a2.077,2.077,0,0,0,1.622-3.374ZM19.86,18H4.182l2.7-3.375A1,1,0,0,0,7.1,14V9a5,5,0,0,1,10,0v5a1,1,0,0,0,.219.625l2.6,3.25Z"
      fill="white"
    />
  );
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ display: "block", ...style }}
      {...props}
    >
      <title>bell</title>
      <defs>
        <mask id="mask-no-dot">{bellPath}</mask>
        <mask id="mask-dot">
          {bellPath}
          <circle cx="18" cy="6" fill="black" r="7" />
        </mask>
      </defs>
      <rect
        fill={fill}
        height="24"
        mask={dot ? "url(#mask-dot)" : "url(#mask-no-dot"}
        width="24"
        x="0"
        y="0"
      />
      {dot && <circle cx="18" cy="6" r="4" fill={dotFill} />}
    </svg>
  );
};

export const Spyglass: React.StatelessComponent<{
  fill?: string;
  style?: object;
}> = ({ fill = "#000", style, ...nativeProps }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ display: "block", ...style }}
    {...nativeProps}
  >
    <title>search spyglass icon</title>
    <path
      d="M17.352,15.481a8.517,8.517,0,1,0-2.209,2.033l4.642,4.642,2.121-2.121Zm-6.757,1.364a6.5,6.5,0,1,1,6.5-6.5A6.508,6.508,0,0,1,10.595,16.845Z"
      fill={fill}
    />
  </svg>
);

export const X: React.StatelessComponent<{
  fill?: string;
  style?: object;
}> = ({ fill = "#A0A0A0", style, ...nativeProps }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    style={{ display: "block", ...style }}
    {...nativeProps}
  >
    <title>close-x</title>
    <path
      d="M9.142,8l3.814,3.814-1.142,1.142L8,9.142,4.186,12.956,3.044,11.814,6.858,8,3.044,4.186,4.186,3.044,8,6.858l3.814-3.814,1.142,1.142Z"
      fill={fill}
    />
  </svg>
);
