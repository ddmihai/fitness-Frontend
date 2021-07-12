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
        border: 1px solid #333;
        max-width: 1200px;
        min-height: 100px;
        margin: 0 auto;
        border-radius: 5px;
    }
</style>