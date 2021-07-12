<template>
    <section class="box">
        <div class="box__centered">
            <input v-model="dayName" type="text" placeholder="Add Day">
            <button @click="addDay" type="submit">Add</button>
        </div>
    </section>
</template>

<script>
import links from '../../services/links.js';
import axios from 'axios';

    export default {
       data() {
           return {
               dayName: ''
           }
       },
       
       methods: {
           addDay() {
               if (this.dayName == '' || this.dayName == null) {
                   console.log('Input must be valid!');
               }

               axios.post(links.ADD_DAY, { dayName : this.dayName })
               .then((response) => {
                   console.log(response.data.message);
               });
           }
       }
    }
</script>

<style lang="scss" scoped>
.box
{
    background: #B00020;
    margin: 5px;
    border-radius: 5px;
    min-height: 80px;
    display: flex;
    align-items: center;

    &__centered
    {
        flex: 1 1 300px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }
}


input
{
    flex: 1 1 200px;
    max-width: 350px;
    padding: 10px;
}

button 
{
    padding: 10px;
    width: 125px;
    margin-left: 10px;
}
</style>