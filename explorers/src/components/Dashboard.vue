<template>
  <div>
    <div> 
      <h1>Select your City</h1>
      <button @click="city_set = !city_set">set city</button>
      <h1 v-if="city_set">Search your Suburb</h1>
    </div>
    <div>
      <h1>search by safety</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    data() {
      return {
        city_found: "",
        suburb_found: "",
        city_set: false,
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
      ]),
    },
  }
</script>

<style></style>