<template>
    <a 
    :href="disabled ? null : href"
    :class="[disabled && 'disabled',!underline && 'no-underline']"
    >
        <slot></slot>
    </a>
</template>

<script>
    export default{
    name:'umLink',
    props:{
        href:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        underline:{
            type:Boolean,
            default:true
        },
    }
}
</script>



<style scoped>
    .disabled{
        color: #ccc;
        cursor: not-allowed;
    }
    .no-underline{
        text-decoration: none;
    }
</style>