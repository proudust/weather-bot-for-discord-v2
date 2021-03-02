import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const extensions = [".ts", ".js"];

/**
 * index.ts のデッドコードを除去しないためのプラグイン。
 * {@link https://github.com/google/clasp/blob/master/docs/esmodules.md}
 * @implements {import("rollup").Plugin}
 */
class PreventTreeShakingPlugin {
  constructor() {
    this.name = "no-treeshaking";
  }

  /**
   * @param id {string}
   * @param importer {string | undefined}
   * @returns {import("rollup").ResolveIdResult}
   */
  resolveId(id, importer) {
    return importer ? null : { id, moduleSideEffects: "no-treeshake" };
  }
}

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    new PreventTreeShakingPlugin(),
    nodeResolve({ extensions }),
    typescript(),
  ],
};
