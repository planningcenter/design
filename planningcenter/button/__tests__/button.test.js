import React from "react";
import { render, cleanup } from "react-testing-library";

// TODO: this should eventually test dist/*
import Button, {
  PutButton,
  DestroyButton,
  CancelButton,
  getScaledButtonClasses,
  getRestfulButtonClasses
} from "../button.js";

afterEach(cleanup);

test("No props", () => {
  const { getByTestId } = render(
    <Button data-testid="no-props" />
  );
  expect(getByTestId("no-props").className).toBe("Button");
});

test("PutButton classes", () => {
  const { getByTestId } = render(
    <PutButton data-testid="no-props" />
  );
  expect(
    getByTestId("no-props").className.split(" ")
  ).toEqual(
    expect.arrayContaining([
      "Button",
      "RestfulButton",
      "RestfulButton--action_put"
    ])
  );
});

test("DestroyButton classes", () => {
  const { getByTestId } = render(
    <DestroyButton data-testid="no-props" />
  );
  expect(
    getByTestId("no-props").className.split(" ")
  ).toEqual(
    expect.arrayContaining([
      "Button",
      "RestfulButton",
      "RestfulButton--action_destroy"
    ])
  );
});

test("CancelButton classes", () => {
  const { getByTestId } = render(
    <CancelButton data-testid="no-props" />
  );
  expect(
    getByTestId("no-props").className.split(" ")
  ).toEqual(
    expect.arrayContaining([
      "Button",
      "RestfulButton",
      "RestfulButton--action_cancel"
    ])
  );
});

test("Supported size props", () => {
  const { getByTestId } = render(
    <React.Fragment>
      <Button height={2.5} data-testid="height-2.5" />
      <Button height={3} data-testid="height-3" />
      <Button height={4} data-testid="height-4" />
      <Button height={5} data-testid="height-5" />
      <Button height={6} data-testid="height-6" />
    </React.Fragment>
  );
  expect(getByTestId("height-2.5").className).toContain(
    "ScaledButton--height_2.5"
  );
  expect(getByTestId("height-3").className).toContain(
    "ScaledButton--height_3"
  );
  expect(getByTestId("height-4").className).toContain(
    "ScaledButton--height_4"
  );
  expect(getByTestId("height-5").className).toContain(
    "ScaledButton--height_5"
  );
  expect(getByTestId("height-6").className).toContain(
    "ScaledButton--height_6"
  );
});

test("getScaledButtonClasses", () => {
  // expect(getScaledButtonClasses()).toThrow();

  expect(getScaledButtonClasses({})).toBe("");

  // in bounds
  expect(getScaledButtonClasses({ height: 4 })).toBe(
    "ScaledButton ScaledButton--height_4"
  );

  // ignores others
  expect(getScaledButtonClasses({ width: 4 })).toBe("");

  // out of bounds
  // TODO: this shouldn't work without `strict: false`
  expect(getScaledButtonClasses({ height: 10 })).toBe(
    "ScaledButton ScaledButton--height_10"
  );
});

test("getRestfulButtonClasses", () => {
  // expect(getScaledButtonClasses()).toThrow();

  expect(getRestfulButtonClasses({})).toBe("");

  // in bounds
  expect(getRestfulButtonClasses({ action: "put" })).toBe(
    "RestfulButton RestfulButton--action_put"
  );

  // ignores others
  expect(getRestfulButtonClasses({ width: 4 })).toBe("");

  // out of bounds
  // TODO: this shouldn't work without `strict: false`
  expect(
    getRestfulButtonClasses({ action: "whatever" })
  ).toBe("RestfulButton RestfulButton--action_whatever");
});
