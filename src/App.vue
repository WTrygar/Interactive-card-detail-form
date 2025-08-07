<script setup lang="ts">
import type { Component } from 'vue'
import CardBack from './components/CardBack.vue'
import CardFront from './components/CardFront.vue'
import InputForm from './components/InputForm.vue'
import { useCardStore } from './stores/counter'

const store = useCardStore()

interface Props {
  CardFront?: Component
  CardBack?: Component
  InputForm?: Component
}

const props = defineProps<Props>()
</script>

<template>
  <div class="max-h-lvh max-auto relative flex flex-col lg:flex-row content-center">
    <div
      class="bg-[url('/src/images/bg-main-mobile.png')] bg-no-repeat bg-cover h-70 mb-30 lg:min-h-lvh lg:w-3/10"
    >
      <div class="max-w-820 h-100 lg:h-200 lg:w-200 relative overflow-hidden">
        <CardBack
          class="absolute top-9 right-5 sm:right-25 md:right-45 lg:top-110 lg:left-30 xl:left-45"
        />
        <CardFront
          class="absolute top-37 left-5 sm:left-25 md:left-45 lg:top-50 lg:left-15 xl:left-30"
        />
      </div>
    </div>
    <InputForm class="lg:w-7/10" />
  </div>
</template>

<style scoped></style>
