import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

//公共插件配置
const plugins = [
    vue({
        //提取CSS
        css: true,
        //提取模板 to render函数
        compileTemplate: true
    }),
    json(),
    nodeResolve(),
    postcss({
        //把CSS插入到style中
        // inject:true,
        //把CSS放到和JS同一目录
        extract: true,
    })
]

isDev || plugins.push(terser())

//获取根路径中的packages路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root).filter(item => {
    //过滤 只保留文件夹
    return fs.statSync(path.resolve(root, item)).isDirectory()
}).map(item => {
    //为每一个文件夹创建对应的配置
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
        input: path.resolve(root, item, 'index.js'),
        output: [{
            exports: 'auto',
            file: path.resolve(root, item, pkg.main),
            format: 'cjs'
        },
        {
            exports: 'auto',
            file: path.resolve(root, item, pkg.module),
            format: 'es'
        }
        ],
        plugins: plugins
    }
})