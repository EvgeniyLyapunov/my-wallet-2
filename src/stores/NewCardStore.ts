import Card from '@/models/Card'
import { defineStore } from 'pinia'

import { useWalletStore } from './WalletStore'

interface IInitState {
  NewCardTemplate: Card
}

const wallet = useWalletStore()

export const useNewCardStore = defineStore('new_card', {
  state: (): IInitState => ({
    NewCardTemplate: new Card()
  }),
  getters: {
    currentStateOfNewCard(state) : Card {
      return state.NewCardTemplate
    }
  },
  actions: {
    saveNewCard(data : Card): void {
      this.NewCardTemplate.cardName = data.cardName;
      this.NewCardTemplate.cardMoneyType = data.cardMoneyType;
      this.NewCardTemplate.isVirtual = data.baseCardName == 'base' ? false : true
      this.NewCardTemplate.baseCardName = this.NewCardTemplate.isVirtual ? data.baseCardName : null
      this.NewCardTemplate.baseCardId = this.NewCardTemplate.isVirtual ? wallet.getCardIdByCardName(data.cardName) : null
      this.NewCardTemplate.currentSum = data.currentSum

      const newCard = JSON.parse(JSON.stringify(this.NewCardTemplate))
      wallet.addNewCard(newCard)

      this.clearNewCardTemplate()
    },
    clearNewCardTemplate() {
      this.NewCardTemplate = new Card()
    },
  }
})