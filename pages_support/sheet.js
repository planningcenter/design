import React from "react";

export function Sheet({ className, children, ...props }) {
  return (
    <section className={["Sheet", className].join(" ")} {...props}>
      <style>
        {`.Sheet {
          --background-0: white;
          background-color: var(--background-0);
          border-radius: 5px; /* assuming nested button is 4px @ 32px height default */
          box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12)
        }`}
      </style>
      {children}
    </section>
  );
}
