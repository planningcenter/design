import React from "react";
import { render, cleanup } from "react-testing-library";

// TODO: this should eventually test lib/*
import Avatar from "../avatar.js";

afterEach(cleanup);

test("No props", () => {
  const { getByTestId } = render(
    <Avatar data-testid="no-props" />
  );
  expect(getByTestId("no-props").className).toBe("Avatar");
});

test("inset prop", () => {
  const { getByTestId } = render(
    <Avatar inset={true} data-testid="inset" />
  );
  expect(getByTestId("inset").className).toBe("Avatar Avatar--inset_true");
});

test("Supported size props", () => {
  const { getByTestId } = render(
    <React.Fragment>
      <Avatar size={2.5} data-testid="size-2.5" />
      <Avatar size={3} data-testid="size-3" />
      <Avatar size={4} data-testid="size-4" />
      <Avatar size={5} data-testid="size-5" />
      <Avatar size={6} data-testid="size-6" />
      <Avatar size={7} data-testid="size-7" />
      <Avatar size={8} data-testid="size-8" />
      <Avatar size={9} data-testid="size-9" />
    </React.Fragment>
  );
  expect(getByTestId("size-2.5").className).toContain("Avatar--size_2.5");
  expect(getByTestId("size-3").className).toContain("Avatar--size_3");
  expect(getByTestId("size-4").className).toContain("Avatar--size_4");
  expect(getByTestId("size-5").className).toContain("Avatar--size_5");
  expect(getByTestId("size-6").className).toContain("Avatar--size_6");
  expect(getByTestId("size-7").className).toContain("Avatar--size_7");
  expect(getByTestId("size-8").className).toContain("Avatar--size_8");
});

test("Unsupported size props, with strict=false", () => {
  const { getByTestId } = render(
    <React.Fragment>
      <Avatar size="20px" strict={false} data-testid="size-20px" />
      <Avatar size="profile" strict={false} data-testid="size-profile" />
      <Avatar size={10} strict={false} data-testid="size-10" />
    </React.Fragment>
  );

  expect(getByTestId("size-20px").className).toContain("Avatar--size_20px");
  expect(getByTestId("size-profile").className).toContain("Avatar--size_profile");
  expect(getByTestId("size-10").className).toContain("Avatar--size_10");
});