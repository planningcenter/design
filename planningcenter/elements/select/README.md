> A OS-native form control, providing a menu of options

## Custom Properties

| Property                     | Default               | Notes |
| ---------------------------- | --------------------- | ----- |
| `--select--font-size`        | `1em`                 |       |
| `--select--background-color` | `#fff`                |       |
| `--select--height`           | `2.25rem`             |       |
| `--select--width`            | `auto`                |       |
| `--select--padding`          | `0 1.25rem 0 0.5rem`  |       |
| `--select--color`            | `inherit`             |       |
| `--select--border-color`     | `hsl(0, 0%, 58%)`     |       |
| `--select--border-radius`    | `0.25rem`             |       |
| `--select--background-image` | _source pasted below_ |       |

## Disclosure Icon — encoded source

Because this is an image and not a proper SVG,  
It can't be configured with `currentColor`.

The current method of overriding the icon with a different color is to provide the `--select--background-image` value with this source, adapted to your needs.

```
url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='-7 -7  30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.55504 10.5092C7.75343 10.7608 8.13399 10.7635 8.33592 10.5147L11.3385 6.81508C11.6037 6.48828 11.3711 6 10.9503 6H5.03091C4.61331 6 4.37972 6.48163 4.63826 6.80956L7.55504 10.5092Z' fill='%23444'/%3E%3C/svg%3E%0A")
```
