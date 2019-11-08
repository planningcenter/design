# `@planningcenter/avatar`

> A circular image representing one person

## Usage

`npm -i @planningcenter/avatar`

- [NPM](https://www.npmjs.com/package/@planningcenter/avatar)
- [UNPKG](http://unpkg.com/@planningcenter/avatar)

### React

```jsx
import Avatar from "@planningcenter/avatar";
import "@planningcenter/avatar.css";

<Avatar
  src="path/to/avatar.png"
  alt="some avatar"
  size={4}
  inset={true}
/>;
```

### CSS

First, link the stylesheet, relative to your platform.

```html
<span class="Avatar Avatar--size_4 Avatar--inset_true">
  <img src="path/to/avatar.png" alt="some avatar" />
</span>
```

## Properties

### size: `string | number`

Controls size in `8px` increments.

values: `3, 4, 5, 6, 7, 8, 9, "20px", "profile"`

### inset: `boolean`

Insets the component

## Theming with CSS Custom Properties

```css
:root {
  --planningcenter-avatar-inset-color: white;
}
```

## Specification

### Definition

An image representing one person.

### Treatment

- Shape: _circle_
- Dimensions: _height == width_
- Border: _optional_
  - excluded: _20px_
  - size: _.5 \* (absolute-avatar-size / 8px)_ (rounded up for better browser support)
  - scale: _roundUp(size _ .05)\*
  - min: _2px_
  - max: _5px_
  - position: _inside_
  - color: _variable_ (default: white)

### Size

Absolute height/width must be a multiple of 8px, with a single exception for _20px_.

Applications may choose to implement a subset of standard sizes.

#### standard sizes:

- 20px
- 24px
- 32px
- 40px
- 48px
- 56px
- 64px
- 72px