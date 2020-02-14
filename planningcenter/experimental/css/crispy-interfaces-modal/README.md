## Install

An alternate, crispyer styling for Interfaces#Modal — by Registrations

```
yarn add @planningcenter/experimental;
```

## Use

#### Rails/Sprockets

```css
/*= require "@planningcenter/experimental/css/crispy-interfaces-modal/modal.css" */
```

#### SCSS, JS/Webpack

```
import "@planningcenter/experimental/css/crispy-interfaces-modal/modal.css"
```

## CSS Selectors

| Selector               |
| ---------------------- |
| `.modal-layer`         |
| `.modal--open`         |
| `.modal.sm-modal`      |
| `.modal.lg-modal`      |
| `.modal__header`       |
| `.modal__close-button` |
| `.modal__body`         |
| `.modal__footer`       |
| `.modal__title`        |

## CSS Custom Properties

| Property                          | Default Value           |
| --------------------------------- | ----------------------- |
| `--modal--border-color`           | `hsl(0, 0%, 93%)`       |
| `--modal--color`                  | `hsl(0, 0%, 33.3%)`     |
| `--modal-layer--background-color` | `hsla(0, 0%, 93%, 0.9)` |
| `--modal-title--color`            | `hsl(0, 0%, 33.3%)`     |
| `--modal__close-button`           | `hsl(0, 0%, 60%)`       |
