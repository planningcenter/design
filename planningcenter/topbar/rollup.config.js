import typescript from "rollup-plugin-typescript2";
import tsc from "typescript";
import pkg from "./package.json";

const external = Object.keys(
  Object.assign({}, pkg.dependencies, pkg.peerDependencies),
);

export default [
  {
    input: "index.ts",
    output: {
      file: pkg["umd:main"],
      format: "umd",
      globals: { react: "React", superagent: "superagent" },
      sourcemap: true,
      name: "Topbar",
    },
    external,
    plugins: [typescript({ typescript: tsc })],
  },
  {
    input: "index.ts",
    external,
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
    plugins: [typescript({ typescript: tsc })],
  },
];
