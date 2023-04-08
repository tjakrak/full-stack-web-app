<script setup>
import Header from '../components/Header.vue'
import Assessment from '../components/Assessment.vue'
import Accordion from '../components/Accordion.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params)
</script>

<template>
  <main>
    <Header></Header>
    <!-- <Accordion></Accordion> -->
    <Suspense>
        <Assessment></Assessment>
    </Suspense>
  </main>
</template>
