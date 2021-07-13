<template>
    <section>
        <img @click="openModal" width="25" src="https://img.icons8.com/office/16/000000/plus-math.png"/>

        <div v-if="open" class="set-dropdown">
            <form @submit.prevent="addSet">
                <input placeholder="Reps completed" v-model="reps" type="text" />
                <input placeholder="Weight" v-model="weight" type="text" />
                <input placeholder="Time between" v-model="timeBetween" type="text" />
                <input placeholder="Comments" v-model="comments" type="text" >

                <button type="submit">Add Set</button>
            </form>
        </div>
    </section>
</template>

<script>
import links from '../../services/links.js';
import axios from 'axios';

    export default {
        props: ['exerciseID'],

        data() {
            return {
                open:           false,
                reps :          '',                
                weight :        '',          
                timeBetween :   '',     
                comments :      ''
            }
        },

        methods: {

            openModal() {
                this.open = !this.open; 
            },

            addSet() {
               axios.post(links.ADD_SET + this.exerciseID, {
                    reps :  this.reps,            
                    weight :    this.weight,          
                    timeBetween :   this.timeBetween,     
                    comments :  this.comments
               })
               .then((response) => {
                   if (response.data.errors) {
                       console.log('Some fields are not completed!');
                   }
                    this.reps           = '';
                    this.weight         = '';
                    this.timeBetween    = '';
                    this.comments       = '';
                    this.openModal();
                   console.log(response.data);
               })
               .catch(error => console.log(error))
           }
        }
    }
</script>

<style lang="scss" scoped>
.set-dropdown
{
    border: 2px solid red;
}

img
{
    margin: 10px;
}

form
{
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin: 10px auto;
}

input
{
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
}

button
{
    height: 40px;
    margin-top: 10px;
}
</style>