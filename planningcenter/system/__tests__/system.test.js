import { size, scale, breakpoint, fontSize } from "../src/system";

let outOfBounds = [true, false, "nope", -1, 9, 199, 99999];

function assertFunctionInputOutput(fn, input, output) {
  return expect(fn(input)).toBe(output);
}

describe("size", () => {
  function assertSize(i, o) {
    return assertFunctionInputOutput(size, i, o);
  }

  it("returns 0 with input 0", () => assertSize(0, 0));
  it("returns 8 with input 1", () => assertSize(1, 8));
  it("returns 16 with input 2", () => assertSize(2, 16));
  it("returns 24 with input 3", () => assertSize(3, 24));
  it("returns 32 with input 4", () => assertSize(4, 32));
  it("returns 40 with input 5", () => assertSize(5, 40));
  it("returns 48 with input 6", () => assertSize(6, 48));
  it("returns 0 with out-of-bounds inputs", () => {
    outOfBounds.forEach(v => assertSize(v, 0));
  });
});

describe("fontSize", () => {
  function assertFontSize(i, o) {
    return assertFunctionInputOutput(fontSize, i, o);
  }

  it("returns 30 with input 0", () => assertFontSize(0, 30));
  it("returns 25 with input 1", () => assertFontSize(1, 25));
  it("returns 21 with input 2", () => assertFontSize(2, 21));
  it("returns 18 with input 3", () => assertFontSize(3, 18));
  it("returns 16 with input 4", () => assertFontSize(4, 16));
  it("returns 14 with input 5", () => assertFontSize(5, 14));
  it("returns 12 with input 6", () => assertFontSize(6, 12));
  it("returns 10 with input 7", () => assertFontSize(7, 10));
  it("returns 0 with out-of-bounds inputs", () => {
    outOfBounds.forEach(v => assertFontSize(v, 0));
  });
});

describe("scale", () => {
  function assertScale(i, o) {
    return assertFunctionInputOutput(scale, i, o);
  }

  it("returns 0 with input 0", () => assertScale(0, 0));
  it("returns 1 with input 8", () => assertScale(1, 8));
  it("returns 2 with input 16", () => assertScale(2, 16));
  it("returns 3 with input 32", () => assertScale(3, 32));
  it("returns 4 with input 64", () => assertScale(4, 64));
  it("returns 5 with input 128", () => assertScale(5, 128));
  it("returns 6 with input 256", () => assertScale(6, 256));
  it("returns 7 with input 512", () => assertScale(7, 512));
  it("returns 0 with out-of-bounds inputs", () => {
    outOfBounds.forEach(v => assertScale(v, 0));
  });
});

describe("breakpoint", () => {
  function assertBreakpoint(i, o) {
    return assertFunctionInputOutput(breakpoint, i, o);
  }
  it("returns 0 with input 'mn'", () => assertBreakpoint("mn", 0));
  it("returns 480 with input 'xs'", () => assertBreakpoint("xs", 480));
  it("returns 600 with input 'sm'", () => assertBreakpoint("sm", 600));
  it("returns 720 with input 'md'", () => assertBreakpoint("md", 720));
  it("returns 960 with input 'lg'", () => assertBreakpoint("lg", 960));
  it("returns 1200 with input 'xl'", () => assertBreakpoint("xl", 1200));

  it("returns 0 with input 0", () => assertBreakpoint(0, 0));
  it("returns 480 with input 1", () => assertBreakpoint(1, 480));
  it("returns 600 with input 2", () => assertBreakpoint(2, 600));
  it("returns 720 with input 3", () => assertBreakpoint(3, 720));
  it("returns 960 with input 4", () => assertBreakpoint(4, 960));
  it("returns 1200 with input 5", () => assertBreakpoint(5, 1200));
  it("returns 0 with out-of-bounds inputs", () => {
    outOfBounds.forEach(v => assertBreakpoint(v, 0));
  });
});
