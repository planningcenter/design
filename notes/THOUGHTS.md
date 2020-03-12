# Component Strategy Thoughts

## Inside Out

What does it look like to present fully extensible components?

```jsx
// my_app_avatar.js
import { Avatar } from "@planningcenter/avatar";
import { getPresence, getNamePopover } from "@planningcenter/avatar/extensions";
import { composeClassNames } from "@planningcenter/utilities";
import Box from "./our_box";

export default function({ size, inset, online, name, ...props }) {
  return (
    <Avatar
      as={Box}
      className={getClasses(
        getScale([size]),
        getStyle([inset]),
        getPresence([online]),
        getNamePopover([name])
      )(props)}
      {...props}
    />
  );
}
```

What does it look to have second-class composed components?

```jsx
import { Avatar } from "@planningcenter/avatar/composed";
```

Is there a way to communicate approacability in a composeable system like this?  
Is the invitation of extension strong enough?

How are styles paired best with code, wit extensions as default?

## Named Exports For Collectability

Eventually, it could make sense to expose fully-constrained, fully-composed collections.

```jsx
import { Avatar, Text } from "@planningcenter/composed";

let a = <Avatar size={4} inset={true} />;
let t = <Avatar size="small" />;
```

Using named exports provides universal access to the components.

```jsx
import { Text } from "@planningcenter/composed";
import { Avatar, composedClassesFromProps } from "@planningcenter/avatar";

function Avatar(props) {
  return <Avatar className={composedClassesFromProps(props)} {...props} />;
}
```

Problematically,  
With my currently view of the components, what you get will change.

From `composed` you'd get the fully composed version of the component.  
Directly, you'd get a version that requires composition.
