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
            rndEmails: [],
            apiPath: 'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods: {
        getRandomEmail() {
            axios.get(`${this.apiPath}random/mail`).then((response) => {
                let emails = [];
                while (emails.length < 10) {

                }
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
