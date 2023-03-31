<script setup>
import Accordion from '../components/Accordion.vue'
import AssessmentsList from '../components/AssessmentsList.vue'
import Header from '../components/Header.vue'
import OrganizationSummary from '../components/OrganizationSummary.vue'
</script>

<template>
  <main>
    <Header></Header>
    <OrganizationSummary></OrganizationSummary>
    <AssessmentsList></AssessmentsList>
    <!-- <Accordion></Accordion> -->
  </main>
</template>
