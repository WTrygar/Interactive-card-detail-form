import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      cardNumber: '' as string,
      name: '' as string,
      year: '' as string,
      month: '' as string,
      cvc: null as number | null,
    }
  },
})
