<template>
  <div>
    <div> 
      <h1>search by area</h1>
    </div>
    {{test}}
    <div>
      <h1>search by safety</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'Dash',
    computed: {
      ...mapGetters(
        'search', [
        'test'])
    }
  }
</script>

<style></style>