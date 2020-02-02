# `@planningcenter/sweetalert2`

> TODO: Planning Center Opinions for SweetAlert2

WIP

This package builds SweetAlert2 CSS using the provided Sass Variables in (`variables.css`)[https://github.com/sweetalert2/sweetalert2/blob/master/src/variables.scss].

It specifies planning center opinions and exposes a few CSS Custom Properties for further — albeit limited — customization.

## Usage

### Installation

```bash
yarn add @planningcenter/sweetalert2 sweetalert2
```

### CSS

```
// use platform-specific import syntax
@import "@planningcenter/sweetalert2/css/sweetalert2.css";

:root {
  --swal2-font-size: .875rem;
  // ...and more
}
```

#### CSS Variables and defaults

```
--swal2-font-size: 1rem
--swal2-confirm-button-background-color, hsla(0,0%,0%,.6)
--swal2-confirm-button-color, white
--swal2-outline-color, Highlight
--swal2-icon-color: gray;
--swal2-icon-border-color: gray;
```

### JS

```js
import { defaultPromptOptions } from "@planningcenter/sweetalert2";
import Swal from "sweetalert2";

function handleDeleteRequest(user) {
  return Swal.fire({
    ...defaultPromptOptions,
    title: `Delete ${user.name}?`,
    text: `This will remove ${user.name} will all Planning Center apps. Their activity will be lost. You cannot un-delete ${user.name}.`,
    confirmButtonText: `Yes, delete ${user.name}!`,
  });
}
```
