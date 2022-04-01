#自定义组件开发的小demo

#单元测试
```bash
yarn add --dev -W jest @vue/test-utils vue-jest babel-jest @babel/core @babel/preset-env
```
-W的意思是安装到workspace

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