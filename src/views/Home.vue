<template>
  <section class="home">
    
    <!-- Main container that holds all the components-->
    <main-container>
      <template>
          <!-- Get days -->
          <app-day></app-day>

          <!-- Add day component -->
          <add-day></add-day>
      </template>
    </main-container>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
