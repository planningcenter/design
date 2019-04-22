import { size, scale, breakpoint, fontSize } from "../src/system";

describe("size", () => {
  it("returns 0 with input 0", () => expect(size(0)).toBe(0));
  it("returns 8 with input 1", () => expect(size(1)).toBe(8));
  it("returns 16 with input 2", () => expect(size(2)).toBe(16));
  it("returns 24 with input 3", () => expect(size(3)).toBe(24));
  it("returns 32 with input 4", () => expect(size(4)).toBe(32));
  it("returns 40 with input 5", () => expect(size(5)).toBe(40));
  it("returns 48 with input 6", () => expect(size(6)).toBe(48));
  it("returns 0 with out-of-bounds inputs", () => {
    expect(size(true)).toBe(0);
    expect(size(false)).toBe(0);
    expect(size("nope")).toBe(0);
    expect(size(-1)).toBe(0);
    expect(size(9)).toBe(0);
    expect(size(199)).toBe(0);
  });
});

describe("fontSize", () => {
  it("returns 30 with input 0", () => expect(fontSize(0)).toBe(30));
  it("returns 25 with input 1", () => expect(fontSize(1)).toBe(25));
  it("returns 21 with input 2", () => expect(fontSize(2)).toBe(21));
  it("returns 18 with input 3", () => expect(fontSize(3)).toBe(18));
  it("returns 16 with input 4", () => expect(fontSize(4)).toBe(16));
  it("returns 14 with input 5", () => expect(fontSize(5)).toBe(14));
  it("returns 12 with input 6", () => expect(fontSize(6)).toBe(12));
  it("returns 10 with input 7", () => expect(fontSize(7)).toBe(10));
  it("returns 0 with out-of-bounds inputs", () => {
    expect(fontSize(true)).toBe(0);
    expect(fontSize(false)).toBe(0);
    expect(fontSize("nope")).toBe(0);
    expect(fontSize(-1)).toBe(0);
    expect(fontSize(9)).toBe(0);
    expect(fontSize(199)).toBe(0);
  });
});

describe("scale", () => {
  it("returns 0 with input 0", () => expect(scale(0)).toBe(0));
  it("returns 1 with input 8", () => expect(scale(1)).toBe(8));
  it("returns 2 with input 16", () => expect(scale(2)).toBe(16));
  it("returns 3 with input 32", () => expect(scale(3)).toBe(32));
  it("returns 4 with input 64", () => expect(scale(4)).toBe(64));
  it("returns 5 with input 128", () => expect(scale(5)).toBe(128));
  it("returns 6 with input 256", () => expect(scale(6)).toBe(256));
  it("returns 7 with input 512", () => expect(scale(7)).toBe(512));
  it("returns 0 with out-of-bounds inputs", () => {
    expect(scale(true)).toBe(0);
    expect(scale(false)).toBe(0);
    expect(scale("nope")).toBe(0);
    expect(scale(-1)).toBe(0);
    expect(scale(9)).toBe(0);
    expect(scale(199)).toBe(0);
  });
});

describe("breakpoint", () => {
  it("returns 0 with input 'mn'", () => expect(breakpoint("mn")).toBe(0));
  it("returns 480 with input 'xs'", () => expect(breakpoint("xs")).toBe(480));
  it("returns 600 with input 'sm'", () => expect(breakpoint("sm")).toBe(600));
  it("returns 720 with input 'md'", () => expect(breakpoint("md")).toBe(720));
  it("returns 960 with input 'lg'", () => expect(breakpoint("lg")).toBe(960));
  it("returns 1200 with input 'xl'", () => expect(breakpoint("xl")).toBe(1200));

  it("returns 0 with input 0", () => expect(breakpoint(0)).toBe(0));
  it("returns 480 with input 1", () => expect(breakpoint(1)).toBe(480));
  it("returns 600 with input 2", () => expect(breakpoint(2)).toBe(600));
  it("returns 720 with input 3", () => expect(breakpoint(3)).toBe(720));
  it("returns 960 with input 4", () => expect(breakpoint(4)).toBe(960));
  it("returns 1200 with input 5", () => expect(breakpoint(5)).toBe(1200));
  it("returns 0 with out-of-bounds inputs", () => {
    expect(breakpoint(true)).toBe(0);
    expect(breakpoint(false)).toBe(0);
    expect(breakpoint("nope")).toBe(0);
    expect(breakpoint(-1)).toBe(0);
    expect(breakpoint(9)).toBe(0);
    expect(breakpoint(199)).toBe(0);
  });
});
