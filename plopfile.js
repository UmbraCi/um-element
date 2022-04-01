module.exports = plop => {
    plop.setGenerator('component', {
        description: '创建一个新的组件',
        prompts: [{
            type: 'input',
            name: 'name',
            message: '组件名称',
            default: 'MyComponent',
        }],
        actions: [
            {
                type: 'add',
                path: 'packages/{{name}}/src/{{name}}.vue',
                templateFile: 'plop-template/component/src/component.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{name}}/__tests_/{{name}}.test.js',
                templateFile: 'plop-template/component/__tests__/component.test.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{name}}/stories/{{name}}.stories.js',
                templateFile: 'plop-template/component/stories/component.stories.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{name}}/index.js',
                templateFile: 'plop-template/component/index.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{name}}/LICENSE',
                templateFile: 'plop-template/component/LICENSE',
            },
            {
                type: 'add',
                path: 'packages/{{name}}/package.json',
                templateFile: 'plop-template/component/package.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{name}}/README.md',
                templateFile: 'plop-template/component/README.hbs',
            },
        ]
    })
}