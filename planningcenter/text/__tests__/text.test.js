import React from "react";
import { render, cleanup } from "react-testing-library";

// TODO: this should eventually test lib/*
import { Text } from "../src/text.js";

afterEach(cleanup);

test("No props", () => {
  const { getByTestId } = render(<Text data-testid="no-props" />);
  expect(getByTestId("no-props").className).toBe("Text");
});

test("Supported size props — verbose", () => {
  const { getByTestId } = render(
    <React.Fragment>
      <Text fontSize="x-small" data-testid="font-size_x-small" />
      <Text fontSize="small" data-testid="font-size_small" />
      <Text fontSize="medium" data-testid="font-size_medium" />
      <Text fontSize="large" data-testid="font-size_large" />
      <Text fontSize="x-large" data-testid="font-size_x-large" />
    </React.Fragment>
  );
  expect(getByTestId("font-size_x-small").className).toContain(
    "FontScaleText--font-size_x-small"
  );
  expect(getByTestId("font-size_small").className).toContain(
    "FontScaleText--font-size_small"
  );
  expect(getByTestId("font-size_medium").className).toContain(
    "FontScaleText--font-size_medium"
  );
  expect(getByTestId("font-size_large").className).toContain(
    "FontScaleText--font-size_large"
  );
  expect(getByTestId("font-size_x-large").className).toContain(
    "FontScaleText--font-size_x-large"
  );
});
