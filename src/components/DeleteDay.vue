<template>
    <section class="delete">
        <img @click="delet" src="https://img.icons8.com/ios/50/000000/delete-forever.png"/>
        <h2 v-if="opened">Delete</h2>
    </section>
</template>

<script>
import link from '../../services/links.js';
import axios from 'axios';

    export default {
        props: ['exID'],

        data() {
            return {
                opened: false
            }
        },

        methods: {
            delet() {
                axios.delete(link.DELETE_DAY + this.exID)
                .then((response) => {
                    alert(response.data)
                    location.reload();
                })
                .catch(error => console.log(error))
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

.delete
{
    display: flex;
     flex-direction: column;
     padding: 5px;
}
</style>