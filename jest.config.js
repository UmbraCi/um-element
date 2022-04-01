module.exports = {
    "testMatch": ["**/__tests__/**/*.js?(x)"],
    "moduleFileExtensions": [
        "js", "json", "vue"//处理 .vue 文件
    ],
    "transform": {
         // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "@vue/vue2-jest",
        // process js with `babel-jest`
        "^.+\\.js$": "babel-jest"
    },
    //jest 27 默认没有开启浏览器环境
    "testEnvironment": "jsdom"
}