// 项目使用第三方库时，引入第三方库代码
import resolve from 'rollup-plugin-node-resolve'
// 转换 CommonJS 模块 为一个ES模块
import commonjs from 'rollup-plugin-commonjs'
// 用于处理es6代码的转换，使转换出来的代码可以用于不支持es6的环境使用
import babel from 'rollup-plugin-babel'
// 处理css 对scss/less也支持
import postcss from 'rollup-plugin-postcss'
// postcss 需要
import autoprefixer from 'autoprefixer'
// 解析 typescript
import typescript from 'rollup-plugin-typescript2'
// 压缩打包代码
import { terser } from 'rollup-plugin-terser'
// 组件目录
import catalogueMap from './catalogue'
console.log('🚀 ~ file: rollup.config.js ~ line 17 ~ catalogueMap', catalogueMap)

const isDev = process.env.NODE_ENV === 'production'

// 不能使用正则匹配
const externalAry = ['prop-types', 'react', 'react-dom']

// rollup 提供代码分割功能，主要原理是配置多入口文件，这样每个入口文件都会对应一个分割包，各个分割包的共有部分会被提取为 chunk

export default {
  input: {
    index: 'components/index.ts',
    ...catalogueMap
  },

  output: [
    // {
    //   name: 'nyUi',
    //   file: './lib/my-lib-umd.js',
    //   format: 'umd'
    // },
    {
      // file: './lib/my-lib-es.js',
      // format: 'es'
      dir: './lib/es',
      format: 'es',
      entryFileNames: '[name]/index.js', // 输出文件名
      exports: 'named' // 使用什么导出模式 --named 使用命名导出
    },
    {
      // file: './lib/my-lib-cjs.js',
      // format: 'cjs'
      dir: './lib/cjs',
      format: 'cjs',
      entryFileNames: '[name]/index.js', // 输出文件名
      exports: 'named'
    }
  ],

  plugins: [
    postcss({
      plugins: [
        autoprefixer({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
      ]
      // extract: 'css/index.css' // 是否抽离css
    }),
    resolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      runtimeHelpers: true // 使plugin-transform-runtime生效
    }),
    commonjs()
    // isDev && terser()
  ],
  external: externalAry // 排除打包
}
