import type Card from '@/models/Card'
import { defineStore } from 'pinia'

interface IInitState {
  ListOfCards: Card[]
}

export const useWalletStore = defineStore('wallet', {
  state: (): IInitState => ({
    ListOfCards: []
  }),
  getters: {
    currentListOfCardsSize(state) {
      return state.ListOfCards.length
    },
  },
  actions: {
    addNewCard(newCard : Card) : void {
      this.ListOfCards.push(newCard);

      console.log(this.ListOfCards)
    },
    getCardIdByCardName(cardName : string) : string {
      return this.ListOfCards.filter(card => card.cardName == cardName)[0].cardId
    }
  }
})
