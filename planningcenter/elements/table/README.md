> For display of normalized tabular data

## Treatment

### Table

- Border: `1px solid`
- Border color contrast: `1.49:1` min, tintable
- Text alignment: `left`, configurable
- Border spacing: `0`
- Absolute height: contained in 8pt grid — including borders

### Head Row

- Background color: light gray, tintable
- Minimum text contrast: `4.5:1` minimum, tintable
- Text transform: `uppercase`
- Tracking: `.15em`
- Font size: `.75em`
- Font weight: `700`
- Absolute height: `48px` min.
- Horizontal cell gap: `16px` min.
- Vertical separators: none

### Row

- Absolute height: `64px`, configurable
- Vertical separators: none

### Data

- Horizontal padding: `1rem`

## Custom Properties

| Property                          | Default                      | Notes                                                              |
| --------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `--Table--border-color`           | `hsl(0, 0%, 90%)`            | Color of both outside border and horizontal row dividers           |
| `--Table--font-size`              | `0.875rem`                   | Root font-siz. Controls relative scale of Header and Data elements |
| `--Table--border-radius`          | `0`                          |                                                                    |
|                                   |                              |                                                                    |
| `--Table__Row--height`            | `4rem`                       |                                                                    |
|                                   |                              |                                                                    |
| `--Table__Head--background-color` | `hsl(0, 0%, 97.5%)`          |                                                                    |
| `--Table__Head--color`            | `hsla(0, 0%, 40%)`           |                                                                    |
| `--Table__Head--font-size`        | `0.75rem`                    |                                                                    |
|                                   |                              |                                                                    |
| `--Table__Data--border-color`     | `var(--Table--border-color)` |                                                                    |
| `--Table__Data--padding`          | `0 0.5rem`                   |                                                                    |
