import { reactive } from "vue";

export const store = reactive(
    {
        arrayCarte:[],
        arrayArchetipi:[],
        testoRicerca:'',
        ricercaNome:'',
        spinner: false
    }
)