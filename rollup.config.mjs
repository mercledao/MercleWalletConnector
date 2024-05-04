import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.esm.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    terser(), // Minifies the output
  ],
  external: ["react", "react-dom"],
};
