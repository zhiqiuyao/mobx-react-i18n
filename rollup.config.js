import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
	input: 'src/index',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
		{ file: 'lib/index.umd.js', format: 'umd', name: 'mobx-react-i18n'}
	],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		resolve(),
		commonjs()
	],
	external: ['react', 'mobx', 'mobx-react']
};
