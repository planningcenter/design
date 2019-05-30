# `@planningcenter/button`

> An experimental Button, used in Planning Center Publishing

## Examples
https://codesandbox.io/s/1358wv7x33

## Installation

```bash
yarn add @planningcenter/button
```

## Usage

```jsx
import React from "React";
import { ComposedButton as Button } from "@planningcenter/button";
import "@planningcenter/button/button.css";

function App() {
  return <Button>A button</Button>;
}
```

## RestfulButtons

Semantic components wrappers around `ComposedComponent`.  
Implements all APIs of `ComposedComponent`.

### React Component Usage

```jsx
import React from "React";
import {
  PutButton,
  DeleteButton,
  CancelButton
} from "@planningcenter/button";
import "@planningcenter/button/button.css";

function App() {
  return (
    <React.Fragment>
      <PutButton>Create/Update Action</PutButton>
      <DestroyButton>Destroy Action</DestroyButton>
      <CancelButton>Cancel Action</CancelButton>
    </React.Fragment>
  );
}
```

### CSS API

```
"Button RestfulButton RestfulButton--action_destroy"
"Button RestfulButton RestfulButton--action_put"
"Button RestfulButton RestfulButton--action_cancel"
```

## ComposedButton: action

### React Component Usage

```jsx
import React from "React";
import { ComposedButton as Button } from "@planningcenter/button";
import "@planningcenter/button/button.css";

function App() {
  return (
    <React.Fragment>
      <Button action="put">Create/Update Action</Button>
      <Button action="destroy">Destroy Action</Button>
      <Button action="cancel">Cancel Action</Button>
    </React.Fragment>
  );
}
```

### CSS API

```
"Button RestfulButton RestfulButton--action_destroy"
"Button RestfulButton RestfulButton--action_put"
"Button RestfulButton RestfulButton--action_cancel"
```

## ComposedButton: height

### React Component Usage

```jsx
import React from "react";
import { ComposedButton as Button } from "@planningcenter/button";
import "@planningcenter/button/button.css";

function App() {
  return (
    <React.Fragment>
      <Button>height: 4 (default)</Button>
      <Button height={2.5}>height: 2.5</Button>
      <Button height={3}>height: 3</Button>
      <Button height={4}>height: 4</Button>
      <Button height={5}>height: 5</Button>
      <Button height={6}>height: 6</Button>
    </React.Fragment>
  );
}
```

### CSS API

```
"Button ScaledButton ScaledButton--height_2.5"
"Button ScaledButton ScaledButton--height_3"
"Button ScaledButton ScaledButton--height_4"
"Button ScaledButton ScaledButton--height_5"
"Button ScaledButton ScaledButton--height_6"
```

## ComposedButton: as

`ComposedButton` provides opinions about styel only.  
You can change the underlying element by passing it via the `as` prop.

This includes components of your own design.  
This can be helpful in use with `Box` components that exist as the base element in many apps.

### React Component Usage

```jsx
import React from "react";
import { ComposedButton as Button } from "@planningcenter/button";
import "@planningcenter/button/button.css";

function App() {
  return (
    <React.Fragment>
      <Button>Button</Button>
      <Button type="submit">Button [type=submit]</Button>
      <Button as="a" href="#">
        Anchor
      </Button>
      <Button as="input" value="Input" />
      <Button
        as="input"
        type="submit"
        value="Input [type=submit]"
      />
      <Button>Button</Button>
      <Button type="submit">Button [type=submit]</Button>
      <Button as="a" href="#">
        Anchor
      </Button>
      <Button as="input" value="Input" />
      <Button
        as="input"
        type="submit"
        value="Input [type=submit]"
      />
    </React.Fragment>
  );
}
```

### CSS API

```
"Button"
```

## Functions

There's no magic sauce.  
The resolution af props to selectors is done in exported functions.

So, if you want to own your own button implementation want the `height` and `action` APIs,  
You can resolve the classes with these functions.

### `getScaledButtonClasses`

You can pass it all your `props`.  
Or just the ones we care about.

```js
import { getRestfulButtonClasses } from "@planningcenter/buttons";

let classes = getScaledButtonClasses({ action: "destroy" });
// => "RestfulButton RestfulButton--action_destroy"

let classes = getScaledButtonClasses(null);
// => ""
```

### `getRestfulButtonClasses`

You can pass it all your `props`.  
Or just the ones we care about.

```js
import { getRestfulButtonClasses } from "@planningcenter/buttons";

let classes = getRestfulButtonClasses({ height: 3 });
// => "RestfulButton RestfulButton--height_3"

let classes = getRestfulButtonClasses(null);
// => ""
```
