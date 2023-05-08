<script>
import { store } from '../store';

export default {
    nome: 'Cerca',
    data(){
        return{
            store
        }
    }

}
</script>

<template>
    <div class="cerca">
        <select v-for="(elem, index) in arrayArchetipi"></select>
    </div>
</template>

<style scoperd lang="scss">
    .cerca{
        height: 60px;
        padding: 0 30px;
    }
</style>