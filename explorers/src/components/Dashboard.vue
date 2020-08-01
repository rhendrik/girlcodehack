<template>
  <div>
    <div> 
      <h1 v-if="!city_set">Select your City</h1>
      <div v-for="city in cities" :key="city">
        <button @click="set_city(city);city_set = !city_set" v-if="!city_set">{{city}}</button>
      </div>
      <h1 v-if="city_set">You have selected {{city_found}}</h1>

      <!--search for suburb-->
      <h1 v-if="city_set & !suburb_set">Select your Suburb</h1>
      <div v-if="(city_set) & !suburb_set">
        <button  v-for="suburb in suburbs.johannesburg" :key="suburb" @click="set_suburb(suburb); suburb_set = !suburb_set">
          {{suburb}}
        </button>
      </div>
      <h1 v-if="city_set & suburb_set">You have selected {{suburb_found}}</h1>
    </div>
    <div>
      <!--search by safety grade-->

      <!--set timeline-->

      <!-- Display Results-->

      <results v-if="city_set & suburb_set"></results>

    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import results from './Results.vue'
  import {
    mapActions as mapSearchActions,
    mapGetters as mapSearchGetters,
    getterTypes,
    actionTypes,
  } from 'vuex-search';
  export default{
    data() {
      return {
        item_found: "",
        city_set: false,
        suburb_set: false,
        isDropdownActive: false,
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
        'city_found',
        'suburb_found'
        ]),
      ...mapSearchGetters('search', {
        resultIds: getterTypes.result,
        isLoading: getterTypes.isSearching,
      }),
    },
    methods: {
      ...mapMutations('search',[
        'set_city',
        'set_suburb'
        ]),
      ...mapSearchActions('search', {
        searchCities: actionTypes.search,
      }),
      doSearch() {
        this.searchCities(this.text);
      },
      updateCity(e) {
        this.$store.commit('updateCity', e.target.value)
      }
    },
    components: {
      Results: results,
    }
  }
</script>

<style></style>