import { terser } from "rollup-plugin-terser";
import vue from 'rollup-plugin-vue'

module.exports = [
    {
        input: 'index.js',
        output: [{
            file: 'dist/index.js',
            format:'es'
        }],
        plugins: [
            vue({
                //动态插入单文件组件的CSS   作为style标签
                css: true,
                //明确转换模板为render函数
                compileTemplate: true
            }),
            //压缩插件
            terser()
        ]
    }
]