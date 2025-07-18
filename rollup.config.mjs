import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm",
    exports: "auto",
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    json(),
    resolve({ preferBuiltins: true }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
  ],
  external: ["react", "react-dom", "@walletconnect/ethereum-provider", "@walletconnect/modal", "ethers"],
};
