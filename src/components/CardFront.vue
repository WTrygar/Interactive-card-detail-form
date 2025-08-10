<template>
  <div
    class="flex justify-center self-center bg-[url('/src/images/bg-card-front.png')] bg-contain bg-no-repeat w-90 h-60 font-grotesk text-white tracking-[.25em]"
  >
    <div class="flex flex-col justify-between w-full m-4 mb-14">
      <div class="bg-[url('/src/images/card-logo.svg')] ml-1 h-1/2 bg-no-repeat"></div>
      <div class="flex flex-col justify-between h-1/2">
        <div class="text-center text-2xl pt-4 tracking-[.13em]">
          {{ store.cardNumber.slice(0, 4) }} {{ store.cardNumber.slice(4, 8) }}
          {{ store.cardNumber.slice(8, 12) }} {{ store.cardNumber.slice(12, 16) }}
        </div>
        <div class="flex flex-row justify-between text-sm px-1">
          <div>{{ store.name.toUpperCase() }}</div>
          <div>{{ store.month }}/{{ store.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCardStore } from '@/stores/counter'

const store = useCardStore()
</script>
