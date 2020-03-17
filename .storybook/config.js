import { configure } from "@storybook/react";
import "./global.css";
import "../planningcenter/themes/dark-os.css";
import "../planningcenter/themes/light-os.css";

// automatically import all files ending in *.stories.js
configure(
  require.context("../planningcenter", true, /\.stories\.(js|mdx)$/),
  module
);
