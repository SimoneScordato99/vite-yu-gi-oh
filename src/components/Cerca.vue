<script>
import { store } from '../store';

export default {
    nome: 'Cerca',
    data(){
        return{
            store
        }
    },
    

    }
</script>

<template>
    <div class="cerca">
        <select v-model="store.testoRicerca">
            <option v-for="(elem, index) in store.arrayArchetipi"  :value="elem">{{ elem }}</option>
        </select>
        <button @click="$emit('giuseppe')" type="submit">Cerca</button>
    </div>
</template>

<style scoperd lang="scss">
    .cerca{
        height: 60px;
        padding: 0 30px;
    }
</style>