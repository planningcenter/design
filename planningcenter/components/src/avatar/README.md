> A circular image representing one person

## Treatment

- Shape: _circle_
- Dimensions: _height == width_
- Border: _optional_
  - excluded: _20px_
  - size: _.5 \* (absolute-avatar-size / 8px)_ (rounded up for better browser support)
  - scale: _roundUp(size _ .05)\*
  - min: _2px_
  - max: _5px_
  - position: _inside_
  - color: _variable_ (default: white)

## Size

Absolute height/width must be a multiple of 8px, with a single exception for _20px_.
Applications may implement as sizes as modular scale and/or incremental.

## Custom Properties

```css
--Avatar--size
```
