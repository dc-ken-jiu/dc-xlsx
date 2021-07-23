import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        name: 'dc-xlsx',
        file: 'lib/index.js',
        format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
    plugins: [
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    ]
};