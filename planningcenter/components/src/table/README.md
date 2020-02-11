> For display of normalized tabular data

## Treatment

### Table

- Border: `1px solid`
- Border color contrast: `1.49:1` min, tintable
- Text alignment: `left`, configurable
- Border spacing: `0`
- Absolute height: contained in 8pt grid — including borders

### Head

- Background color: light gray, tintable
- Minimum text contrast: `4.5:1` minimum, tintable
- Text transform: `uppercase`
- Tracking: `.15em`
- Font size: `.875em`
- Font weight: `700`
- Absolute height: `3rem` min.
- Horizontal cell gap: `1rem` min.
- Vertical separators: none

### Row

- Absolute height: `4rem`, configurable
- Vertical separators: none

#### Head Row

- Absolute height: `3rem`, configurable

### Data

- Horizontal padding: `1rem`

## Custom Properties

| Property                          | Default                      | Notes                                                              |
| --------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `--Table--border-color`           | `hsl(0, 0%, 90%)`            | Color of both outside border and horizontal row dividers           |
| `--Table--font-size`              | `1rem`                       | Root font-siz. Controls relative scale of Header and Data elements |
| `--Table__Head--background-color` | `hsl(0, 0%, 97.5%)`          |                                                                    |
| `--Table__Head--color`            | `hsla(0, 0%, 40%)`           |                                                                    |
| `--Table__Row--height`            | `4rem`                       |                                                                    |
| `--Table__Data--border-color`     | `var(--Table--border-color)` |                                                                    |
| `--Table__Data--padding`          | `1rem`                       |                                                                    |
