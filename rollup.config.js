import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.mjs',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [nodeResolve(), commonjs()]
};
