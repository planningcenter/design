export const POINT = 8;

export const NUDGE = 4;

export const BREAKPOINTS = {
  mn: 0,
  xs: 480,
  sm: 600,
  md: 720,
  lg: 960,
  xl: 1200
};

export const SIZES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const SCALE = [0, 1, 2, 4, 8, 16, 32, 64, 128];

export const TYPE_SCALE = [10, 12, 14, 16, 18, 21, 25, 30];

export const HEADING_SCALE = TYPE_SCALE.slice(2, 8).reverse();

export function size(depth) {
  return bound(POINT * SIZES[depth]);
}

export function fontSize(depth) {
  return bound(TYPE_SCALE[depth]);
}

export function scale(depth) {
  return bound(POINT * SCALE[depth]);
}

export function breakpoint(depth) {
  let value =
    typeof depth === "string"
      ? BREAKPOINTS[depth] || 0
      : Object.values(BREAKPOINTS)[depth] || 0;
  return bound(value);
}

function bound(value) {
  return value || 0;
}
