import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import nodeResolve from '@rollup/plugin-node-resolve'
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      name: 'sugarbush-saga',
      sourcemap: true,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfigDefaults: true,
      tsconfig: "tsconfig.json",
      tsconfigOverride: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    nodeResolve(),
    resolve()
  ],
}