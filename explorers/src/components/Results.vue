<template>
<div>
  <h1>Test</h1>
  {{marshalltown.in}}
    <vue-slider 
        v-model="value"
        :min="0"
        :max="11"
        :interval="1"
    >  
    </vue-slider>
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
        value: 0,

      }
    },
    computed: {
      ...mapGetters('results', [
        'test',
        'marshalltown'
        ])
    },
    components: {
          VueSlider,
    }
  }

</script>