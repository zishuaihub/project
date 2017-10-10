<template>
  <div id="home">
    <mheader></mheader>
    <mfooter></mfooter>
    <router-view></router-view>
  </div>
</template>
<script>
  import Footer from './Footer.vue'
  import Header from './Header.vue'
  export default {
    name:'home',
    data(){
      return{

      }
    },
    components:{
      'mheader':Header,
      'mfooter':Footer,
    }
  }
</script>
