import { defineStore } from 'pinia'

interface IInitState {
  CardsPlacesList: []
}

export const useCardsViewStore = defineStore('cardsView', {
  state: (): IInitState => ({
    CardsPlacesList: []
  }),
  getters: {
    currentCardsPlacesListSize(state) {
      return state.CardsPlacesList.length
    }
  }
})
