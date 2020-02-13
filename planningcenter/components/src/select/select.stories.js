import React from "react";
import { Select } from "./select";
import readme from "./README.md";

import "./select.css";
import "../../../typeface/sans-serif.css";

export default {
  title: "Components|Select",
  component: Select,
  parameters: { notes: readme },
};

export const Spec = () => (
  <div className="sans-serif">
    <Select>
      <option>Taylor Swift</option>
      <option>Fearless</option>
      <option>Speak Now</option>
      <option>Red</option>
      <option>1989</option>
      <option>Reputation</option>
      <option>Lover</option>
    </Select>
  </div>
);

export const Disabled = () => (
  <div className="sans-serif">
    <Select disabled>
      <option>Taylor Swift</option>
      <option>Fearless</option>
      <option>Speak Now</option>
      <option>Red</option>
      <option>1989</option>
      <option>Reputation</option>
      <option>Lover</option>
    </Select>
  </div>
);

export const FourteenPx = () => (
  <div
    className="sans-serif"
    style={{ "--Select--font-size": ".875rem", "--Select--height": "2rem" }}
  >
    <Select>
      <option>Taylor Swift</option>
      <option>Fearless</option>
      <option>Speak Now</option>
      <option>Red</option>
      <option>1989</option>
      <option>Reputation</option>
      <option>Lover</option>
    </Select>
  </div>
);
FourteenPx.story = {
  name: "14px example",
};
