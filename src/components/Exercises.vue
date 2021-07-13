<template>
    <section class="exercises">
        <img @click="shExercises" src="https://img.icons8.com/ios-filled/50/000000/drag-list-down.png"/>
        <div v-if="opened" class="exercises__container">
           <div v-if="exArray.length == 0" class="exercise__empty">
               <h3>No exercises yet!</h3>
           </div>

           <div  v-if="exArray.length > 0" class="exercises__box">
               <ul v-for="ex in exArray" :key="ex._id">
                   <li>
                        <p class="exercises__name"> Exercise: {{ ex.nameOrType }}</p>
                        <p class="exercises__comms">Comments: {{ ex.exerciseComments }}</p>
                        <p class="exercises__sets">Total Sets: {{ ex.sets.length }}</p>
                        <!-- Button for deleting exercise -->
                        <img width="25" src="https://img.icons8.com/color/100/000000/delete-sign--v1.png"/>
                        <!-- Button for getting all the sets -->
                        <add-sets :exerciseID="ex._id"></add-sets>
                   </li>
               </ul>
           </div>
        </div>
    </section>
</template>

<script>
import link from '../../services/links.js';
import axios from 'axios';

    export default {
        props: ['exID'],

        data() {
            return {
                opened:     false,
                exArray:    []
            }
        },

        methods: {
            shExercises() {
                this.opened = !this.opened;
                axios.get(link.GET_DAY_EXERCISES + this.exID)
                .then((response) => {
                    this.exArray = response.data;
                })
                .catch(error => console.log(error))
            }
        }
    }
</script>

<style lang="scss" scoped>
img
{
    width: 25px;
}

.exercises
{
     display: flex;
     flex-direction: column;
     padding: 5px;
}

ul 
{
    background: #333;
    margin-top: 10px;
    text-align: left;
    border-radius: 5px;
}

ul li p
{
    padding: 10px;
    color: white;

    &:last-of-type
    {
        font-weight: bolder;
        font-size: .8em;
    }

    &:nth-of-type(2) 
    {
        font-weight: bolder;
        font-size: .8em;
    }
}
</style>