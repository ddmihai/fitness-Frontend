<template>
    <section>
        <img width="25" @click="getSets" src="https://img.icons8.com/color/48/000000/sort-down.png"/>

        <div v-if="openDropdown" class="dropdown__sets">
            <ul v-for="set in setArray" :key="set._id">
                <li> Reps: {{ set.reps }} </li>
                <li> Weight: {{ set.weight }} </li>
                <li> Time between: {{ set.timeBetween }} </li>
                <li> Comments: {{ set.comments }} </li>
            </ul>
        </div>
    </section>
</template>

<script>
import link from '../../services/links.js';
import axios from 'axios';

    export default {

        props: ['exerciseID'],

        data() {
            return {
                setArray :      [],
                openDropdown:   false
            }
        },
        
        methods: {
            getSets() {
                axios.get(link.GET_SETS + this.exerciseID)
                .then(response => {
                    this.setArray = response.data;
                })
                .catch(error => console.log(error));

                this.openDropdown = !this.openDropdown;
            }
        }
    }
</script>

<style lang="scss" scoped>
img
{
    margin: 10px;
}

section
{   
    width: 100%;
}

.dropdown__sets
{
    display: flex;
    flex-direction: column;
}

ul 
{
    color: white;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid white;

    & li 
    {
        padding: 15px;
        padding-left: 40px;
    }
}

</style>