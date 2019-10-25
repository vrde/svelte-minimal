import * as fs from "fs";
import copy from "rollup-plugin-copy";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "src/index.js",
  output: {
    file: "build/bundle.js",
    format: "iife"
  },
  plugins: [
    copy({ targets: [{ src: "public/index.html", dest: "build" }] }),
    svelte({
      css: css => css.write("build/bundle.css")
    }),
    json(),
    // rollup-plugin-node-resolve embeds external dependecies in the bundle,
    // more info here:
    // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
    resolve(),
    // https://github.com/thgh/rollup-plugin-serve
    serve({ contentBase: "build", open: true, host: "0.0.0.0", port: 4000 }),
    livereload("build")
  ],
  watch: {
    clearScreen: true,
    chokidar: {
      usePolling: true
    }
  }
};
