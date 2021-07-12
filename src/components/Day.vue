<template>
    <section>
            <div class="header" v-for="e in exArray" :key="e._id">
                <p><span>Day:</span> {{ e.dayName }}</p>
                <p>Exercises number: {{ e.exercices.length }}</p>
                
                <div class="btn-collection">
                    <img @click="addExercise(e._id)" src="https://img.icons8.com/ios-filled/50/000000/add--v2.png"/>
                    <img @click="delExercise(e._id)" src="https://img.icons8.com/ios-filled/50/000000/delete-trash.png"/>
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
      exArray: []
    }
  },

  methods: {

    /* Get all exercises and store in the data() array */
    getDays() {
      axios.get(links.GET_DAYS)
               .then((response) => {
                   this.exArray = response.data;
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

  updated() {
      this.getDays()
  }
}
</script>

<style lang="scss" scoped>
.header
{
    border: 1px solid #333;
    min-height: 80px;
    padding: 10px;
    margin: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
}

img 
{
    width: 25px;
    margin: 10px;
    cursor: pointer;
}

.btn-collection
{
    margin-left: auto;
}
</style>