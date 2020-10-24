# @planningcenter/symbol

`Symbol` makes working with external resources SVGs painless, accessible, and repeatable.

## Explanation

`@planningcenter/icons`' primary export are SVG sprites.  
They're desigen consumed with `<use>` tags.  
But `use` tags still need a wrapping `<svg>` element, default styling (size and color), and contextually relevant accessibility attributes like `<title>` and `<description>`.

`Symbol` ties all that into a single React component with just three props.

## What it does

- `symbol` lets familiar, standard external svg syntax for reference: `my-icons.svg#smile"`
- `title` lets you describe the what the image means and maps to a `<title>` tag with unique `aria-labelledby` identifiers
- `desc` lets you describe what the image looks like and maps to a `<description>` tag with unique `aria-labelledby` identifiers
- `className` does as you'd expect but also includes our default `.symbol` class
- all other SVG properties, like `role` and `aria-hidden` are passed thru as needed

## Installation

Most apps are setup with a component that hold a dictionary of path urls, export an `Icon` component, and modify `path` (where needed):

```jsx
import Symbol from "@planningcenter/symbol";
import general from "@planningcenter/icons/sprites/general.svg";
import people from "@planningcenter/icons/sprites/people.svg";

let icons = {
  general,
  people,
};

export default function Icon({ symbol: s, ...platformProps }) {
  let [collection, symbol] = s.replace(".svg", "").split("#");
  let path = `${icons[collection]}`;

  return <Symbol symbol={`${path}#${symbol}`} {...platformProps} />;
}
```

## Usage

With a setup like that in [Installation](#installation), you can use the component with these outcomes:

### default

This will show the image but provide nothing to screen readers.  
Accessibility tools will rais an error that you should either hide the icon from the accessibility tree or add a `title`.

```jsx
<Icon symbol="general#show-eye" />
```

### `aria-hidden`

Adding `aria-hidden` removes the element from the accessiblity tree, indicating that you intentionally don't want anything read.

```jsx
<Icon symbol="general#show-eye" aria-hidden />
```

### `title`

Anything added to `title` will be read by screen readers _and_ (by default) shown as an in-browser tooltip.

This text should describe the intent, not the icon.

```jsx
<Icon symbol="general#show-eye" title="This group is public" />
<Icon symbol="general#star" title="Favorited event" />
<Icon symbol="general#right-chevron" title="Next page" />
```

### `description`

Anything added to `description` will be read by screen readers _but_ not shown as an in-browser tooltip.

Descriptions on SVGs are customarily used to describe the image itself.  
It's rare that you'll use this.

<Icon
  symbol="general#show-eye"
  description="An eye that's open"
/>

````

## Escape hatches

Up to v11 of `@planningcenter/icons`, all symbols had a `<title>` present.
It wasn't a _great_ title, just the name of the icon.
But it gave us enough to _feel_ like we providing a sensible fallback to users of assistive technologies.

That wasn't actually correct.

A change to Adobe Illustrator's default exports forced us to investigate those assumptions and make some corrections.

The new `Symbol` API gives you full control over what is read by screenreaders.
However, it no longer provides icon names as default.
Mostly because the internal names didn't provide contextual value when read.

The ideal path forward is to provide meaningful `title`s — where appropriate — or using `aria-hidden` — where icons don't need to be read.

However, if (for some reason), you need to quickly get back to the previous behavior, there is an a _temporary_ escape hatch.

```jsx
import { ForceTitleContext } from "@planningcenter/symbol"

export function MyView() {
  return () {
    <ForceTitleContext.Provider value={true}>
      <main>
        ...
      </main>
    </ForceTitleContext.Provider>
  }
}
````

I'll repeat that this is a _temporory_ escape hatch — where the previous behavior was preferred for an entire view, while more nuanced improvements are made.  
It _will not_ be present in the next version.
