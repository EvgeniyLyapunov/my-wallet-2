import { defineStore } from 'pinia'

interface IInitState {
  CardsPlacesList: string[]
}

const startLengthCardsView = 18

export const useCardsViewStore = defineStore('cardsView', {
  state: (): IInitState => ({
    CardsPlacesList: Array(startLengthCardsView).fill('empty')
  }),
  getters: {
    currentCardsPlacesListSize(state) {
      return state.CardsPlacesList.length
    }
  },
  actions: {
    
  }
})
