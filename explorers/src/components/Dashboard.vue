<template>
  <div>
    <div> 
      <h1>Select your City</h1>
      <!--search for city-->
      <button @click="city_set = !city_set">set city</button>
      <form>
        <input type="text" name="city" required v-model="suburb_found">
        {{suburb_found}}
        {{city_found}}
        <button id="submit" @click="set_city(suburb_found)"></button>
      </form>
      <h1 v-if="city_set">Search your Suburb</h1>

      <!--search for suburb-->

    </div>
    <div>
      <h1>search by safety</h1>
      <!--search by safety grade-->

      <!--set timeline-->

    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import {
    mapActions as mapSearchActions,
    mapGetters as mapSearchGetters,
    getterTypes,
    actionTypes,
  } from 'vuex-search';
  export default{
    data() {
      return {
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
        'city_found'
        ]),
      ...mapSearchGetters('search', {
        resultIds: getterTypes.result,
        isLoading: getterTypes.isSearching,
      }),
      ...mapMutations('search',[
        'set_city',
        ]),
    },
    methods: {
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
    mutations: {
      updateCity (state, message) {
        state.obj.city_found = message
      }
    },
  }
  </script>

  <style></style>