<script setup>

import { ref } from 'vue';

const randomNumber = ref(Math.random())

</script>

<template>
    <h2>{{randomNumber}}</h2>
</template>
