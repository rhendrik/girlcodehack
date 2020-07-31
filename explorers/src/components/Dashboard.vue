<template>
  <div>
    <div> 
      <h1>Select your City</h1>
      <button @click="set_city(!city_set)">set city</button>
      <h1 v-if="city_set">Search your Suburb</h1>
    </div>
    <div>
      <h1>search by safety</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default{
    data() {
      return {
        city_found: "",
        suburb_found: "",
      }
    },
    name: 'Dash',
    computed: {
      ...mapGetters(
        'search', [
        'test',
        'search_array',
        'search_results',
        'cities',
        'suburbs',
        'city_set',])
    },
    ...mapMutations(
      "search", [
      "set_city",
      ])
  }
</script>

<style></style>