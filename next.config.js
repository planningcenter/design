const rehypePrism = require("@mapbox/rehype-prism");

const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/
});

const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withMDX({
    extension: /.mdx?$/,
    pageExtensions: ["js", "md", "mdx"],
    options: { hastPlugins: [rehypePrism] },
    target: "serverless"
  })
);
