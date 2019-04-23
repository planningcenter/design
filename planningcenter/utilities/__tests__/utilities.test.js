import { mapPropsToClassNames } from "../src/utilities.js";

// TODO:
test("Interface. Move to TS and delete these.", () => {
  expect(mapPropsToClassNames()()()).toBe("");

  expect(mapPropsToClassNames("Base")()()).toBe("");

  expect(mapPropsToClassNames("Base")(["height"])()).toBe("");

  expect(
    mapPropsToClassNames("Base")(["height"])({
      height: 4
    })
  ).toBe("Base Base--height_4");
});

test("All modifying properties must be whitelisted via options array", () => {
  expect(
    mapPropsToClassNames("Base")()({
      other: "ignored"
    })
  ).toBe("");
});

test("Where modifying options are provided, classes are generated", () => {
  expect(
    mapPropsToClassNames("Base")(["height", "other"])({
      height: 6,
      other: "yup",
      bool: true
    })
  ).toBe("Base Base--height_6 Base--other_yup");
});

test("No modifying classes are provided for options when props don't exist", () => {
  expect(mapPropsToClassNames("Base")(["height", "other"])({})).toBe("");
});

test("Objects are supported and interpreted as breakpoint blocks", () => {
  expect(
    mapPropsToClassNames("Base")(["height", "inset"])({
      height: { small: 3, medium: 4, large: 5 },
      inset: true
    })
  ).toBe(
    "Base @small__Base--height_3 @medium__Base--height_4 @large__Base--height_5 Base--inset"
  );
});
