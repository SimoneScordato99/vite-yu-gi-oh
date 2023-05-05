<script >
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  // import axios from 'axios'
  // import {store} from './store'

  export default {
    name: 'App',
    components:{
      AppHeader,
      AppMain
    },
    // data(){
    //   store
    // },
    // created(){
    //   this.api()
    // },
    // methods:{
    //   api(){
    //     axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=1')
    //       .then((elemento) =>{
    //         const Apii = elemento.data.data[0].name
    //         this.store.carte = Apii
    //         console.log(this.store.carte)
    //       } )
    //   }
    // }
  }
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
