<script >
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import axios from 'axios';
  import {store} from './store';

  export default {
    name: 'App',
    components:{
      AppHeader,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    created(){
      this.carloApi()
    },
    methods:{
      carloApi(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=1')
          .then((elem)=>{
            console.log(elem.data.data)
            const dataApi = elem.data.data
            this.store.arrayCarte = dataApi
            console.log(this.store.arrayCarte)
            
            
          } )
      }
    }
  }
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
