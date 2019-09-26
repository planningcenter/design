# `@planningcenter/surface`

> Visual Hierarchy for Themed, Layer-able UI Surfaces

## Usage

## Demo

While documentation is being fleshed out, check out these living examples.

https://codesandbox.io/embed/theme-draft-6-surface-pmycp

## Exposed Class Selectors

```css
.Surface

.Surface--depth_2
.Surface--depth_2 .Surface

.Surface--depth_3
.Surface--depth_3 .Surface
.Surface--depth_3 .Surface .Surface
```

## Exposed CSS Custom Properties

These must be defined defined product-side.

```css
--surface-1of1_background-color

--surface-2of2_background-color
--surface-1of2_background-color

--surface-3of3_background-color
--surface-2of3_background-color
--surface-1of3_background-color
```

## Exposed React Component and props
```
<Surface />
<Surface depth={2}/>
<Surface depth={3}/>
```

### Installation

### CSS Only (Webpack)

```js
import "@planningcenter/surface/css/surface.css";
```

### CSS Only (Rails/Sass)

```sass
@import "@planningcenter/surface/css/surface.css"
```

### CSS Only (Rails/Sprockets)

```css
/*= require "@planningcenter/surface/css/surface.css" */
```

### JS + CSS

```js
import "@planningcenter/surface/css/surface.css";
import { Surface } from "@planningcenter/surface";
```
