import {
  UNSTABLE_getClassSelectorsFromProps as getClassSelectorsFromProps,
  UNSTABLE_getBemSelector as getBemSelector
} from "../utilities.js";

// TODO:
test("Interface. Move to TS and delete these.", () => {
  expect(getClassSelectorsFromProps()()()).toBe("");

  expect(getClassSelectorsFromProps("Base")()()).toBe(
    ""
  );

  expect(
    getClassSelectorsFromProps("Base")(["height"])()
  ).toBe("");

  expect(
    getClassSelectorsFromProps("Base")(["height"])({
      height: 4
    })
  ).toBe("Base Base--height_4");
});

test("All modifying properties must be whitelisted via options array", () => {
  expect(
    getClassSelectorsFromProps("Base")()({
      other: "ignored"
    })
  ).toBe("");
});

test("Where modifying options are provided, classes are generated", () => {
  expect(
    getClassSelectorsFromProps("Base")(["height", "other"])(
      {
        height: 6,
        other: "yup",
        bool: true
      }
    )
  ).toBe("Base Base--height_6 Base--other_yup");
});

test("No modifying classes are provided for options when props don't exist", () => {
  expect(
    getClassSelectorsFromProps("Base")(["height", "other"])(
      {}
    )
  ).toBe("");
});

test("Objects are supported and interpreted as breakpoint blocks", () => {
  expect(
    getClassSelectorsFromProps("Base")(["height", "inset"])(
      {
        height: { small: 3, medium: 4, large: 5 },
        inset: true
      }
    )
  ).toBe(
    "Base @small__Base--height_3 @medium__Base--height_4 @large__Base--height_5 Base--inset"
  );
});

function subject(props) {
  let classes = [];

  Object.entries(props).forEach(
    ([modifierName, valuesAt]) =>
      Object.entries(valuesAt).forEach(
        ([at, modifierValue]) =>
          classes.push(
            getBemSelector({
              block: `@${at}`,
              element: "ResponsiveBase",
              modifierName,
              modifierValue
            })
          )
      )
  );

  return classes;
}

test("getBemSelector", () => {
  expect(getBemSelector()).toBe("");

  expect(getBemSelector({ block: "Base" })).toBe("Base");

  expect(
    getBemSelector({ block: "Base", modifierName: "nope" })
  ).toBe("Base");

  expect(
    getBemSelector({
      block: "Base",
      modifierName: "property",
      modifierValue: "value"
    })
  ).toBe("Base--property_value");

  expect(
    getBemSelector({
      modifierName: "property"
    })
  ).toBe("");

  expect(
    getBemSelector({
      modifierValue: "value"
    })
  ).toBe("");

  expect(
    getBemSelector({
      modifierName: "bool",
      modifierValue: false
    })
  ).toBe("");

  expect(
    getBemSelector({
      modifierName: "bool",
      modifierValue: true
    })
  ).toBe("--bool");

  expect(
    getBemSelector({
      block: "@sm",
      element: "Base",
      modifierName: "property",
      modifierValue: 6
    })
  ).toBe("@sm__Base--property_6");
});
