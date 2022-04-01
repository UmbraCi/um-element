import umLink from '../src/link.vue';

export default{
    title:'umLink',
    component:umLink
}

export const Text = ()=> ({
    components:{ umLink },
    template:`
    <div>
        <um-link disabled href="https://www.baidu.com">百度一下</um-link>
    </div>
    `,
    data() {
        return {
            
        }
    },
})