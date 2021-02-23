## Install package

Add this package and its dependency, `sweetalert2`, to your project.

```bash
yarn add @planningcenter/sweetalert2 sweetalert2
```

## Import SweetAlert2 without the default theme

Out of the box, SweetAlert2 injects a default theme stylesheet. To disable the default behavior, import SweetAlert2 from the nested `/dist` directory.

```js
import Swal from "sweetalert2/dist/sweetalert2";
```

The `sweetalert2/dist/sweetalert2` path [does not inject the default stylesheet](https://github.com/sweetalert2/sweetalert2/issues/410#issuecomment-385568079).

## Apply CSS theme

This stylesheet handles the basics - font styles, colors, padding, margins - outlined in the [specification](https://planningcenter.design/alerts). If you've already implemented the updated icons then this stylesheet may be all you need to ensure parity with the spec.

### Import the Planning Center SweetAlert2 theme

#### CSS

```css
@import "@planningcenter/sweetalert2/css/sweetalert2.css";
```

#### SCSS

```scss
@import "@planningcenter/sweetalert2/css/sweetalert2";
// no .css extension
```

In Sass, be sure to omit the `.css` file extension.

Sass `@import` directives are tricky. Sass decides whether to use Sass `import` or CSS `import` based on the presence of a `.css` extension. In our environments, you want to force the Sass `import` by omitting the `.css` extension.

### Example

https://codesandbox.io/s/planningcentersweetalert2-swal-v10-minimal-fv71h?file=/src/index.js

## Apply JS options objects for icons and button colors

`planningcenter/sweetalert2` exposes configuration objects for standard alerts and confirm SweetAlerts.

The options are imported and spread over SweetAlert calls for consistency.

```js
// import SweetAlert
import Swal from "sweetalert2/dist/sweetalert2";

// import config options
import { standardConfirmOptions } from "@planningcenter/sweetalert2";

// spread default options and override as needed
Swal.fire({
  ...standardConfirmOptions,
  titleText: `This site uses cookies`,
  text: `We use cookies to store your personal preferences. Please accept use of cookies for optimal performance.`,
  confirmButtonText: `Yes, I accept cookies`,
  cancelButtonText: `No, don't use cookies`,
});
```

### Live example

https://codesandbox.io/s/planningcentersweetalert2-swal-v10-9qvwr

### Available options

These are options objects available from this library.  
The most up-to-date resource is always [source](https://github.com/planningcenter/design/blob/main/planningcenter/sweetalert2/src/sweetalert2.js).

```js
import {
  // blue info icon, blue confirm button, no cancel
  standardAlertOptions,

  // green check icon, blue confirm button, no cancel
  successAlertOptions,

  // red x icon, blue confirm button, no cancel
  errorAlertOptions,

  // yellow exclamation icon, blue confirm button
  standardConfirmOptions,

  // yellow exclamation icon, green confirm button
  createConfirmOptions,

  // red exclamation icon, red confirm button
  destroyConfirmOptions,
} from "@planningcenter/sweetalert2";
```

## Create convenience functions using mixin() (recommended)

You may prefer the ergonomics of a localized functions over multiple imports and option spreading. Here's how we suggest making those convenience functions available to your app.

**`alert.js`**

```js
// import SweetAlert
import Swal from "sweetalert2/dist/sweetalert2";

// import planning/sweetalert2 options
import {
  standardAlertOptions,
  successAlertOptions,
  errorAlertOptions,
  standardConfirmOptions,
  createConfirmOptions,
  destroyConfirmOptions,
} from "@planningcenter/sweetalert2";

// Create localized functions using .mixin()
// Customization thru mixin() allows fire() to be called with object or argument options
export const alert = Swal.mixin(standardAlertOptions);
export const alertSuccess = Swal.mixin(successAlertOptions);
export const alertError = Swal.mixin(errorAlertOptions);
export const confirm = Swal.mixin(standardConfirmOptions);
export const confirmDestroy = Swal.mixin(destroyConfirmOptions);
export const confirmCreate = Swal.mixin(createConfirmOptions);
```

**`some-app-module.js`**

```js
// import alerts from the alerts module
import * as alerts from "./alerts";

// use confirm() convenience function
// confirm() applies planning center icon and confirm color from `standardConfirmOptions`
alerts.confirm.fire({
  titleText: `This site uses cookies`,
  text: `We use cookies to store your personal preferences. Please accept use of cookies for optimal performance.`,
  confirmButtonText: `Yes, I accept cookies`,
  cancelButtonText: `No, don't use cookies`,
});

// SweetAlert2's function argument syntax is retained in tandem with the configuration options. Thanks .mixin()
return alerts.alert.fire(
  "This site uses cookies",
  "We use cookies to store your personal preferences. Please accept use of cookies for optimal performance."
);
```

### Example

https://codesandbox.io/s/planningcentersweetalert2-swal-v10-0qx9i?file=/src/alerts.js

### Wrapping .fire() for migration ease

If you're migrating a lot of code and want to preserve an old fire method, you can wrap the call — passing arguments — like so:

```js
export const fire = (...args) =>
  Swal.mixin({
    /* old options */
  }).fire(...args);
```

### Using global `window.Swal`

Examples above use modules. If you're app uses `Swal` as a global, your implementation might look something like this:

```js
import sweetalert from "sweetalert2/dist/sweetalert2";

window.Swal = {
  alert: sweetalert.mixin(standardAlertOptions),
  alertSuccess: sweetalert.mixin(successAlertOptions),
  alertError: sweetalert.mixin(errorAlertOptions),
  confirm: sweetalert.mixin(standardConfirmOptions),
  confirmDestroy: sweetalert.mixin(destroyConfirmOptions),
  confirmCreate: sweetalert.mixin(createConfirmOptions),
  fire: (...args) =>
    sweetalert
      .mixin({ reverseButtons: true, showCancelButton: true })
      .fire(...args),
};
```

## Create an alert facade (not recommended)

Implementing a facade is an option. It's helpful in three cases:

- Switching between SweetAlert\* versions
- Switching between SweetAlert\* and alternative alert library
- Strategic selection/elimination of SweetAlert\* features

The primary downside of a facade is that implementors take on the full burdon of documentation, testing, and implementation.

People implementas [Alert](https://github.com/ministrycentered/people/blob/master/app/javascript/utils/alert/alert.js), which a trasparent facade.

If you implement a facade, implement an opaque facade — not exposing access to the underlying `fire` method. This will prevent it from becoming a [leaky abstraction] where — in an effort to unexposed library features — consumers reach thru the facade to manipulate the dependency directly. This completely eliminates the value of a facade for transitioning from one library/API to another.

If not actively transitioning between libraries, create convenience functions using `mixin` instead.

### Why this theme doesn't expose a facade

Library facades that live behind a module boundary are difficult to maintain in a multi-app ecosystem. It shifts the library dependency from `peerDependency` to `dependency`. This means that a local (app) changes can't be made without library intervention. These interventions might demand consensus from other apps — which is difficult (if not impossible) to get.

Maintaining a `peerDependency` allows apps to retain full local control over local dependencies while utilizing the theme and shared options.

## Further Reading

### SweetAlert2

- [SweetAlert2 documentation](https://sweetalert2.github.io)
- [SweetAlert2 theming documentation](https://sweetalert2.github.io/#themes) and [examples](https://github.com/sweetalert2/sweetalert2-themes)

### Planning Center

- [Planning Center Alert specification on planningcenter.design](https://planningcenter.design/alerts)
- [Planning Center Alert specification in Figma](https://www.figma.com/file/V8Ajrhr3jwzatZvkpqNKaK/Alerts?node-id=0%3A1)
- [Publishing Installation](https://github.com/ministrycentered/publishing/pull/568)

### Code

- [Theme SCSS Source](./src/sweetalert2.scss)
- [Theme JS Source](./src/sweetalert2.js)
