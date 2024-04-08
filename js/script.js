// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

import { } from './utility.js';
import { } from './data.js';

const dt = luxon.DateTime;

const { createApp } = Vue;
createApp({
    data() {
        return {
            rndEmail: null
        }
    },
    methods: {
        getRandomEmails() {
            axios.get(` `).then((response) => {

            })
        }
    },
    computed: {

    },
    mounted() {

    },
    created() {

    }
}).mount('#app');
