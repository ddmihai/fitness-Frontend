<template>
    <section class="main">
        <slot></slot>
    </section>  
</template>

<script>
    export default {    
        
    }
</script>

<style lang="scss" scoped>
    .main
    {
        max-width: 1200px;
        min-height: 100px;
        margin: 0 auto;
    }
</style>