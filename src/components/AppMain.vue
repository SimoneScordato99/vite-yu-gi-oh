<script >
 import Card from './Card.vue'
 import {store} from '../store'
  export default {
    name: 'AppMain',
    components:{
        Card
    },
    data(){
        return{
            store
        }
    }
  }
</script>

<template>
    <div class="sfondo">
        <h1>carte: {{ store.arrayCarte.length }}</h1>
        <div class="container">
            <Card v-for="(elem, index) in store.arrayCarte"
            :mario=elem
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .sfondo{
        background-color: orange;
        
        .container{
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>
