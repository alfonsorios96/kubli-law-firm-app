import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import staticSite from 'rollup-plugin-static-site';

export default {
  input: 'src/kubli-law-firm-app.js',
  output: {
    file: 'build/kubli-law-firm-app-bundle.js',
    format: 'esm'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    terser ()
  ]
};