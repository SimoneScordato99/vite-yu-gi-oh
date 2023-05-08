<script >
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import Cerca from './components/Cerca.vue';
  import axios from 'axios';
  import {store} from './store';

  export default {
    name: 'App',
    components:{
      AppHeader,
      Cerca,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    created(){
      this.carloApi()
      this.apiArchetipi()
    },
    methods:{
      apiArchetipi(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=280&offset=1')
          .then((elem)=>{
            const dataApi2 = elem.data.data
            for (let i = 0; i < dataApi2.length; i++) {
              const dataApiArchetype = elem.data.data[i].archetype;
              if( !store.arrayArchetipi.includes(dataApiArchetype)){
                store.arrayArchetipi.push(dataApiArchetype)
              }
            }
            console.log(this.store.arrayArchetipi)
          } )
      },
      carloApi(){
        if(store.testoRicerca==''){
          axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=980&offset=1`)
            .then((elem)=>{
              const dataApi = elem.data.data
              this.store.arrayCarte = dataApi
              
              
            } )
        } else{
          axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=980&offset=1&archetype=${store.testoRicerca}`)
            .then((elem)=>{
              const dataApi = elem.data.data
              this.store.arrayCarte = dataApi
              
              
            } )
        }
      }
    }
  }
</script>

<template>
    <AppHeader/>
    <Cerca @giuseppe="carloApi"/>
    <AppMain/>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
