# @planningcenter/finder

Components for building a resource Finder in React

## Installation
```bash
yarn add @planningcenter/finder
```

## Usage
import * as Finder from "finder";

## Notes on filtering (From January, 2018)

## Groups Finder criteria

* Mobile/Desktop support
  - Read non-table variants
  - No dedicated mobile app. Mobile matters
* Data-agnostic (Groups doesn't have an API)
* Persisted params
  - React Router?
* Don't use `TokenizedInput` for two-dimensional Groups/Member Resource
* UI
  - No Filters = `*`
  - Horizontal section dividers are "and" `&&`
  - Each "filter" is "or" `||`
  - Tokens wrap (not scroll)
  - Seperate text search and tokens
  - In mobile, "Filters" panel gets modalized and sits behind "manage filters" button.
