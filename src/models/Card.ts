import { uuid } from 'vue-uuid'
import Operation from './Operation'

class Card {
  cardId: string
  cardName: string
  cardMoneyType: string
  isVirtual: boolean
  baseCardName: string | null
  baseCardId: string | null
  virtualList: string[]
  currentSum: number
  operationHistory: Operation[]
  screenLocation: number
  // TODO добавить поле cardIcon

  constructor() {
    this.cardId = uuid.v4()
    this.cardName = ''
    this.cardMoneyType = ''
    this.isVirtual = false
    this.baseCardName = null
    this.baseCardId = null
    this.virtualList = []
    this.currentSum = 0
    this.operationHistory = []
    this.screenLocation = 0
  }
}

export default Card
