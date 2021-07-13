<template>
    <section class="addEx">
        <img @click="addEx" src="https://img.icons8.com/ios/50/000000/add--v2.png"/>
        <div v-if="opened" class="exercise">
            <form @submit.prevent="addExercise">
                <input placeholder="Name of exercise" v-model="nameOrType" type="text" />
                <input placeholder="Comments" v-model="exerciseComments" type="text" />

                <button type="submit">Create</button>
            </form>
        </div>
    </section>
</template>

<script>
import links from '../../services/links.js';
import axios from 'axios';

    export default {
        props: ['dayID'],

        data() {
            return {
                opened:             false,
                nameOrType:         '',
                exerciseComments:   ''
            }
        },

        methods: {
            addEx() {
                this.opened = !this.opened;
            },

            addExercise() {
                axios.post(links.ADD_EXERCISE + this.dayID, { nameOrType: this.nameOrType, exerciseComments: this.exerciseComments})
                .then((response) => {
                    console.log(response.data);
                    this.nameOrType = '';
                    this.exerciseComments = '';
                    
                    // Close dropdown
                    this.addEx();
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

.addEx
{
    display: flex;
    flex-direction: column;
    padding: 5px; 
}

form
{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

input
{
    max-width: 400px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #333;
    margin-bottom: 20px;
    padding-left: 10px;
}

button
{
    max-width: 400px;
    height: 40px;

}
</style>