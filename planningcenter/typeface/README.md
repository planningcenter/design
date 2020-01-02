# `@planningcenter/typeface`

## Usage

```
yarn add @planningcenter/typeface
```

## Usage

Setup for Rails Planning Center Rails apps using Sprockets.

```
/* application.css */
/*= @planningcenter/typeface/sans-serif.css */
/*= @planningcenter/typeface/monospace.css */
```

## Extensions

Additional libraries for specific use cases.

### sans-serif--print

This resolves an issue reported by @shanebonham that impacts printing in Chrome on Catalina.

[Referenc](https://bugs.chromium.org/p/chromium/issues/detail?id=1018581&q=BlinkMacSystemFont&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified)

This extension overrides our `font-family: syste-ui ...` with `font-family: Sans-Serif` with a `@media print` gate.

```
/* application.css */
/* ORDER MATTERS */
/*= @planningcenter/typeface/sans-serif.css */
/*= @planningcenter/typeface/extension/sans-serif--print.css */
```

## Examples

```html
<body class="sans-serif">
  ...
</body>
```

```html
<pre class="monospace">
  <code>
    ...
  </code>
</pre>
```
