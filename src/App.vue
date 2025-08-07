<script setup lang="ts">
import type { Component } from 'vue'
import CardBack from './components/CardBack.vue'
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
      <div class="max-w-820 h-100 relative overflow-hidden">
        <CardBack class="absolute top-9 right-5" />
        <CardFront class="absolute top-37 left-5" />
      </div>
    </div>
    <InputForm />
  </div>
</template>

<style scoped></style>
