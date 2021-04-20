import * as React from "react";
import "./horizontal-main-nav.css";

// https://www.aditus.io/aria/aria-current/
// TODO: doccument aria-current="page"
// dependent components are available for export but held private on a wait and see basis

function Link({
  as: As = "a",
  ["aria-current"]: ariaCurrent = false,
  ...props
}: {
  as?: React.ElementType;
  ["aria-current"]?: React.AriaAttributes["aria-current"];
}): JSX.Element {
  return (
    <a
      data-horizontal-main-nav--link
      aria-current={ariaCurrent ? "page" : false} // enforce "page" | false
      {...props}
    />
  );
}

function Action({ as: As = "button", type = "button", ...props }) {
  return <As data-horizontal-main-nav--action {...props} />;
}

function ActionGroup({ as: As = "div", ...props }) {
  return <As data-horizontal-main-nav--action-group {...props} />;
}

function LinkGroup({ as: As = "ul", ...props }) {
  return <As data-horizontal-main-nav--action-group {...props} />;
}

function Container({ as: As = "div", ...props }) {
  return <As data-horizontal-main-nav--container {...props} />;
}

// would neet to take: linkItems, actionItems, name
// example props decomp: { ["aria-label"]: ariaLabel, ...props }
// example props post-decomp usage: {...(ariaLabel ? { "aria-label": ariaLabel } : null)}
// empty aria-label ok? https://stackoverflow.com/questions/58058203/is-an-html-aria-label-attribute-allowed-to-be-an-empty-string

// TODO: switch on type: node or object to allow for arrays of items (or mixes)

// TODO: allow control of render function
// TODO: only takes render function to allow for proper keying
// TODO: write post on argument order
// TODO: don't forget keys
// TODO: see if there's cloneElement strat

export default function HorizontalMainNav({
  label = "",
  navItems = [],
  actionItems = [],
  children,
  ...props
}: {
  id?: string;
  label: string;
  navItems: object[];
  actionItems: object[];
  children: unknown;
}) {
  let ariaLabelIdentifier = `horizontal-main-nav--${
    props.id ||
    "1" /* not too worried about duplication of this element but could easily be fixed by applying an id*/
  }`;

  // NOTE:
  // There is nothing redeaming about this function beyond reducing duplication in this one example.
  // Don't ever export it or copy it into another area
  function anTotallyUnusefulWayToReduceDuplicationInTheComponentBody(
    possibleList,
    FallbackAs,
    selector,
    renderItem = ({ as: As = FallbackAs, ...item }, key) => (
      <As key={key} {...item} />
    )
  ) {
    if (React.isValidElement(possibleList)) {
      return possibleList;
    }

    if (possibleList?.length >= 1) {
      return possibleList.map((
        item,
        i /* not wildly concerned with performance for this component */
      ) =>
        React.isValidElement(item)
          ? React.cloneElement(item, { [selector]: true })
          : renderItem(item, i)
      );
    }

    return null;
  }

  return (
    <Container {...props}>
      {children ? (
        children
      ) : (
        <>
          <nav aria-label={label} id={ariaLabelIdentifier}>
            <LinkGroup aria-labelledby={ariaLabelIdentifier}>
              {anTotallyUnusefulWayToReduceDuplicationInTheComponentBody(
                navItems,
                Link,
                "data-horizontal-main-nav--link"
              )}
            </LinkGroup>
          </nav>
          <ActionGroup>
            {anTotallyUnusefulWayToReduceDuplicationInTheComponentBody(
              actionItems,
              Action,
              "data-horizontal-main-nav--action"
            )}
          </ActionGroup>
        </>
      )}
    </Container>
  );
}
