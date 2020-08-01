<template>
  <div>
    <!-- sliders showing range of time -->
    <h1>Show me results</h1> 
    <h1>from: {{marshalltown.month[month_from]}}</h1>
    <vue-slider 
    v-model="month_from"
    :min="0"
    :max="11"
    :interval="1"
    v-on:drag-end="mut_from(month_from)"
    >  
  </vue-slider>
  <h1>{{marshalltown.months[month_to]}}<p v-if="month_from < 4">2019</p><p v-else> 2020</p></h1>
  <h1></h1>
  <h1>to: {{marshalltown.months[month_to]}}</h1>
  <vue-slider 
  v-model=" month_to"
  :min="month_from"
  :max="11"
  :interval="1"
  v-on:drag-end="mut_to(month_to)"
  >
</vue-slider>
<h1>{{marshalltown.months[month_to]}}<p v-if="month_to < 4">2019</p><p v-else> 2020</p></h1>

<!--display results of suburb & time selected -->
<stats></stats>
</div>  
</template>

<script>
  import Stats from './Stats.vue'
  import {mapGetters, mapMutations} from 'vuex'
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
        'month_to',
        'month_from',
        ])
    },
    components: {
      VueSlider,
      stats: Stats,
    },
    methods: {
      ...mapMutations('results',[
        'mut_from',
        'mut_to',
        ])
    }
  }

</script>