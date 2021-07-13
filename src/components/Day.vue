<template>
    <section>
            <div class="header" v-for="(e) in dayAdday" :key="e._id">
                <p><span>Day:</span> {{ e.dayName }}</p>
                <p class="total">Exercises number: {{ e.exercices.length }}</p>
                
                <div class="btn-collection">
                    <app-exercises :exID="e._id"></app-exercises>
                    <del-day :exID="e._id"></del-day>
                    <add-exercises :dayID="e._id"></add-exercises>
                </div>
            </div>
    </section>
</template>

<script>
// @ is an alias to /src
import links from '../../services/links.js';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      dayAdday:      [],
      modalOpened:  false
    }
  },

  methods: {

    /* Get all exercises and store in the data() array */
    getDays() {
      axios.get(links.GET_DAYS)
               .then((response) => {
                   this.dayAdday = response.data;
               });
    },

    addExercise(id) {
        console.log(id);
    },

    delExercise(id) {
        console.log(id);
    }
  },

  mounted() {
    this.getDays()
  },

  // updated() {
  //     this.getDays()
  // }
}
</script>

<style lang="scss" scoped>
.header
{
    border: 1px solid #333;
    min-height: 80px;
    padding: 5px;
    margin: 10px 5px 10px 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
}

.btn-collection
{
   width: 100%;
   display: flex;
   flex-direction: column;
   align-content: flex-end;
}

.total
{
    font-size: .8em;
    margin-top: 6px;
}
</style>