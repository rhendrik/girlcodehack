<template>
  <div>
    <!--monthly average-->
    <h1>{{marshalltown.name}} has an average rate of {{marshalltown.per_month_av}} incidents per month.</h1>
<!--    {{months[month_to]}}
    {{months[month_from]}}-->
 <!--   <table>
      <tr v-for="month in months.slice(month_from, month_to)" :key="month">
        <td>{{month}} </td>
        <tr v-for="i in marshalltown.year.slice(month_from, month_to)" :key="i">
          <td>{{i}}</td>
        </tr>
      </tr>
    </table> -->

    <!--per month-->

  </div>  
</template>

<script >
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('results',[
        'marshalltown',
        'months',
        'month_to',
        'month_from',
        ]),
      ...mapGetters('stats',[
        'test',
        ]),
    }
  } 
</script>