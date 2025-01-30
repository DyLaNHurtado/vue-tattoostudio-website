<script>
export default {
    name: 'Socials',
    props: {
        size:"xl"
    },
  }
</script>

<template>
    <div class="socials" v-once>
        <a href="https://www.instagram.com/delaitto.tattoo" target="_blank"><font-awesome-icon class="icon" id="ig" :icon="['fab', 'instagram']" :size="size"/></a>
        <a href="https://www.tiktok.com/@delaitto.tattoo" target=”_blank”><font-awesome-icon class="icon" id="tiktok" :icon="['fab', 'tiktok']" :size="size"/></a>
    </div>

</template>
<style scoped>
    .socials{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .icon{
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        aspect-ratio: 1/1;
        background: #5f5f5f;
        transition: all .3s;
        border-radius: 8px;
    }
    .icon:hover{
        scale: 1.2;
        color: white;
    }
    #ig:hover{
        background:radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }
    #tiktok:hover{
        background:linear-gradient(120deg ,#ff0050, #000000,#00f2ea);
        
    }
    a{
        text-decoration: none;
        color: white;
    }
</style>