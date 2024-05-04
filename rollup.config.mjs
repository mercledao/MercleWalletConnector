import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled", presets: ["@babel/preset-react"] }), commonjs()],
  external: ["react", "react-dom"],
};
