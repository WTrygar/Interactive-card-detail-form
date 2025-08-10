<script setup lang="ts">
import { useCardStore } from '@/stores/counter'

const store = useCardStore()
</script>

<template>
  <div
    class="font-grotesk font-medium tracking-[.1em] flex flex-col items-center justify-between lg:justify-center md:px-35 lg:px-40"
  >
    <div class="w-9/10 my-4">
      <label for="name" class="">CARDHOLDER NAME</label>
      <div
        class="p-0.5 mt-2 rounded-md bg-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-900"
      >
        <input
          v-model="store.name"
          class="p-3 w-full bg-white placeholder:text-gray-300 rounded-md focus:outline-none"
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
        />
      </div>
    </div>
    <div class="w-9/10 my-4">
      <label for="number" class="">CARD NUMBER</label>
      <div
        class="p-0.5 mt-2 rounded-md bg-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-900"
      >
        <input
          v-model="store.cardNumber"
          class="p-3 w-full bg-white placeholder:text-gray-300 rounded-md focus:outline-none"
          type="text"
          id="name"
          maxlength="16"
          placeholder="e.g. 1234 5678 9123 0000"
          pattern="[0-9.]+"
        />
      </div>
    </div>
    <div class="flex flex-row w-9/10 my-2 gap-8">
      <div class="flex flex-col w-1/2">
        <label for="exp-date" class="tracking-[.08em]">EXP. DATE (MM/YY)</label>
        <div class="flex flex-row gap-4">
          <div
            class="w-1/2 p-0.5 mt-2 rounded-md bg-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-900"
          >
            <input
              v-model="store.month"
              class="w-full p-3 bg-white placeholder:text-gray-300 rounded-md focus:outline-none"
              type="text"
              name="month"
              id="month"
              maxlength="2"
              placeholder="MM"
            />
          </div>
          <div
            class="w-1/2 p-0.5 mt-2 rounded-md bg-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-900"
          >
            <input
              v-model="store.year"
              class="w-full p-3 bg-white placeholder:text-gray-300 rounded-md focus:outline-none"
              type="text"
              name="year"
              id="year"
              maxlength="2"
              placeholder="YY"
            />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <label for="number" class="">CVC</label>
        <div
          class="p-0.5 mt-2 rounded-md bg-gray-300 hover:bg-gradient-to-r from-indigo-500 to-purple-900"
        >
          <input
            v-model="store.cvc"
            class="p-3 w-full bg-white placeholder:text-gray-300 rounded-md focus:outline-none"
            type="text"
            id="name"
            maxlength="3"
            placeholder="e.g. 123"
          />
        </div>
      </div>
    </div>
    <button class="w-9/10 bg-black rounded-md text-white h-14 mt-4 mb-10">Confirm</button>
  </div>
</template>
