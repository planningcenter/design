- button/icon color is set in the JS file
  - this is _kinda_ odd but the way the library is written and the way we're encouraged to override it, it made sense to isolate all concepts of colore (icon and button) to the js module
    - the CSS has no concept of color but the default color — which we could also move
    - didn't like the hand-off to classes, which required a bunch of prefixes to actually override
    - JS coordination is required for this anyway because Swal2 doesn't describe these as different buttons — they're all just confirm.
- CSS might need to be added to stored source, if we add visual regression testing for Swal. alternatively, i could start adding a pretest, build step

TODO?

- add types? does that work with VS Code (even if app does using TS)
- add wrapping example

  ```js
  // Services Alerts
  import { destroyConfirm } from "@planningcenter/sweetalert2";
  import Swal from "sweetalert2";

  export function destroyConfirm(options) {
    return Swal.fire({
      ...destroyConfirmOptions,
      ...options,
    });
  }
  ```
