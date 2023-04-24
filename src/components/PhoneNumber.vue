<script setup>
import {ref} from 'vue'
import PhonenumberValidator from '../libraries/PhonenumberValidator';

const phonenumber = ref('')
const countrycode = ref('DE')

function validate() {
    if (hasValidInput()) 
    {
        const p = new PhonenumberValidator(phonenumber.value, countrycode.value)
        console.log (p.validate() === false ? "Not Valid" : "Valid");
    }
}

function hasValidInput() {
    return phonenumber.value.trim();
}

</script>

<template>
    <h2>Check Phone Number</h2>
    <div>
        <input v-model="phonenumber" placeholder="Add number Here" />
    </div>
    <select v-model="countrycode">
    <option>DE</option>
    <option>CH</option>
    <option>GB</option>
  </select>
    <div class="buttons">
        <button @click="validate">Check Number</button>
    </div>
</template>

<style>




</style>