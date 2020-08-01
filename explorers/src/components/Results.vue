<template>
  <div>
    <h1>Show me results</h1> 
      <h1>from:</h1>
    <vue-slider 
    v-model="value1"
    :min="0"
    :max="11"
    :interval="1"
    >  
  </vue-slider>
  <h1>{{months[value1]}}<p v-if="value1 < 4">2019</p><p v-else> 2020</p></h1>
  <h1></h1>
  <h1>to:</h1>
    <vue-slider 
    v-model="value2"
    :min="0"
    :max="11"
    :interval="1"
    >
  </vue-slider>
  <h1>{{months[value2]}}<p v-if="value2 < 4">2019</p><p v-else> 2020</p></h1>
</div>  
</template>

<script>
  import {mapGetters} from 'vuex'
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/antd.css'
  export default {
    data() {
      return {
        name: '',
        value1: 0,
        value2: 0,
      }
    },
    computed: {
      ...mapGetters('results', [
        'test',
        'marshalltown',
        'months'
        ])
    },
    components: {
      VueSlider,
    }
  }

</script>