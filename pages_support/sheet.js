import React from "react";

export function Sheet({ className, children, ...props }) {
  return (
    <Box as="section" className={["Sheet", className].join(" ")} {...props}>
      <style>
        {`.Sheet {
          --background-0: white;
          transition: all 0.2s ease-in-out;
          background-color: var(--background-0);
          border-radius: 5px; /* assuming nested button is 4px @ 32px height default */
          box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12)
        }
        .Sheet:hover {
          box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12);
        }
        `}
      </style>
      {children}
    </Box>
  );
}

// private

function Box({
  as: As,
  display,
  children,
  className,
  padding,
  margin,
  space,
  ...props
}) {
  return (
    <React.Fragment>
      <style>
        {`
.Box--display_block { display: block }
.Box--display_inline-block { display: inline-block }
.Box--display_flex { display: flex }

.PointGridBox--space_1 > * + * { margin-left: 8px }
.PointGridBox--space_2 > * + * { margin-left: 16px }
.PointGridBox--space_3 > * + * { margin-left: 24px }

.PointGridBox--padding_1 { padding: 8px }
.PointGridBox--padding_2 { padding: 16px }
.PointGridBox--padding_3 { padding: 24px }
.PointGridBox--padding_4 { padding: 32px }
.PointGridBox--padding_5 { padding: 40px }
.PointGridBox--padding_6 { padding: 48px }
.PointGridBox--padding_7 { padding: 56px }
.PointGridBox--padding_8 { padding: 64px }

.PointGridBox--margin_1 { padding: 8px }
.PointGridBox--margin_2 { padding: 16px }
.PointGridBox--margin_3 { padding: 24px }
.PointGridBox--margin_4 { padding: 32px }
.PointGridBox--margin_5 { padding: 40px }
.PointGridBox--margin_6 { padding: 48px }
.PointGridBox--margin_7 { padding: 56px }
.PointGridBox--margin_8 { padding: 64px }
      `}
      </style>
      <As
        className={[
          className,
          display && `Box--display_${display}`,
          space && `PointGridBox--space_${space}`,
          padding && `PointGridBox--padding_${padding}`,
          margin && `PointGridBox--margin_${margin}`,
          "Box"
        ].join(" ")}
        {...props}
      >
        {children}
      </As>
    </React.Fragment>
  );
}
