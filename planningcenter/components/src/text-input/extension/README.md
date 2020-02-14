## `bare`

Removes all all notion of border and box-shadow.

This is suitable when combining a inputs visually with other elements.

This iteration requires that focus state be handled by the consumer.

### Usage

```js
import "@planningcenter/components/text-input/extension/bare.css";
```

### Selectors

`.BareTextInput`

### Sample React Implementations

_As Standalone Component_

```jsx
function BareTextInput({ className, ...props }) {
  return (
    <TextInput className={[className, "BareTextInput"].join(" ")} {...props} />
  );
}
```

_As Composed Component_

```jsx
import { getBareClassNames } from "./bare";

function MyComposedTextInput({ bare, className, ...props }) {
  return (
    <TextInput
      className={[className, getBareClassNames(bare)].join(" ")}
      {...props}
    />
  );
}
```
