# Instructions

1. Install dependencies:
   ```
   npm ci
   ```

2. Test with Node.js, without bundling:
   ```
   node input.mjs
   ```
   It should log `true`.

3. Bundle and run (using `rollup@2.54`, `@rollup/plugin-commonjs@18`):
   ```
   ./node_modules/.bin/rollup -c rollup.config.js
   node output/index.js
   ```
   It logs `true` (**it works!**).

### Next steps if you are coming from [rollup/rollup#4195](https://github.com/rollup/rollup/issues/4195):

4. Update Rollup to 2.55:
   ```
   npm i rollup@~2.55.0
   ```

5. Bundle and run (using `rollup@2.55`, `@rollup/plugin-commonjs@18`):
   ```
   ./node_modules/.bin/rollup -c rollup.config.js
   node output/index.js
   ```

   It throws
   ```
   const {ANY: ANY$1} = require$$26;
            ^

   TypeError: Cannot destructure property 'ANY' of 'require$$26' as it is undefined.
   ```

> **NOTE**: When also updating to `@rollup/plugin-commonjs@19`, it exposes a `@rollup/plugin-commonjs` regression but it stops throwing.

### Next steps if you are coming from [rollup/plugins#962](https://github.com/rollup/plugins/issues/962):

4. Update to `@rollup/plugin-commonjs@19`:
   ```
   npm i -D @rollup/plugin-commonjs@19
   ```

5. Bundle and run (using `rollup@2.54`, `@rollup/plugin-commonjs@19`):
   ```
   ./node_modules/.bin/rollup -c rollup.config.js
   node output/index.js
   ```
   It logs `false` instead of `true`

> **NOTE**: When using `rollup@2.55` and `@rollup/plugin-commonjs@19` it has the same wrong behavior.