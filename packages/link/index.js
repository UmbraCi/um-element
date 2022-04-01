import umLink from './src/link.vue';

umLink.install = Vue =>{
    Vue.comments(umLink.name,umLink)
}

export default umLink