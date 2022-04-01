#自定义组件开发的小demo

#单元测试
```bash
yarn add --dev -W jest @vue/test-utils vue-jest babel-jest @babel/core @babel/preset-env
```
-W的意思是安装到workspace

注意一下jest和vue/test-util的官网，看下版本说明，有的不适合VUE2

babel.config.js
```js
module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
```

jest.config.js 配置文件
```js
module.exports = {
    "testMatch": ["**/__tests__/**/*.js?(x)"],
    "moduleFileExtensions": [
        "js", "json", "vue"//处理 .vue 文件
    ],
    "transform": {
         // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "vue-jest",
        // process js with `babel-jest`
        "^.+\\.js$": "babel-jest"
    }
}
```

rollup打包的配置
先安装rollup
```bash
yarn add rollup rollup-plugin-terser rollup-plugin-vue@5.1.9 -D -W
```
rollup.config.js
```js
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
```

##rollup 一键打包所有工作区
```bash
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```