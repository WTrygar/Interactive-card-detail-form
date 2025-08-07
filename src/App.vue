<script setup lang="ts">
import type { Component } from 'vue'
import CardFront from './components/CardFront.vue'
import InputForm from './components/InputForm.vue'

interface Props {
  CardFront?: Component
  CardBack?: Component
  InputForm?: Component
}

const props = defineProps<Props>()
</script>

<template>
  <div class="min-h-lvh max-auto relative flex flex-col content-center">
    <div class="bg-[url('/src/images/bg-main-mobile.png')] bg-no-repeat bg-cover h-70 mb-30">
      <CardFront />
    </div>
    <InputForm />
  </div>
</template>

<style scoped></style>
