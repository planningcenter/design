module.exports = {
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //   },
  // },
  typescript: {
    reactDocgen: "react-docgen",
  },
  stories: ["../**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-docs/preset"],
};
