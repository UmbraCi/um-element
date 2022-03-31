import Steps from './src/steps.vue';

Steps.install = Vue =>{
    Vue.comments(Steps.name,Steps)
}

export default Steps