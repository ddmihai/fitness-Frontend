<template>
    <section class="addEx">
        <img @click="addEx" src="https://img.icons8.com/ios/50/000000/add--v2.png"/>
        <h2 v-if="opened">Add</h2>
    </section>
</template>

<script>
    export default {
        props: ['exID'],

        data() {
            return {
                opened: false
            }
        },

        methods: {
            addEx() {
                this.opened = !this.opened;
            }
        }
    }
</script>

<style lang="scss" scoped>
img
{
    width: 25px;
}

.addEx
{
    display: flex;
    flex-direction: column;
    padding: 5px;  
}
</style>