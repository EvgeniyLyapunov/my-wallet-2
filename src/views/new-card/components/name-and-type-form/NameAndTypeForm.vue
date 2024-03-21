<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import type Card from '@/models/Card'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { useNewCardStore } from '@/stores/NewCardStore';

const router = useRouter()

type TProp = {
  isConfirmStep: boolean
}

const newCardStore = useNewCardStore()

const createdCard = newCardStore.currentStateOfNewCard

defineProps<TProp>()

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if(value?.length >= 2 && value?.length <= 30)
        return true

      return 'Длина имени карты от 2 до 30 символов'
    },
    selectType(value: string) {
      if(value)
        return true

      return 'Тип карты - наличные или безнал'
    },
    selectBase(value: string) {
      if(value)
        return true

      return 'Если карта базовая, выберите пункт "base"'      
    },
    startAmount(value: number) {
      if(+value >= 0)
        return true

      return 'Начальная сумма равна или больше 0'
    }
  }
})

const name = useField<string>('name')
const selectType = useField<string>('selectType')
const selectBase = useField<string>('selectBase')
const startAmount = useField<number>('startAmount')

const selectTypeItems = ref<string[]>(['cash', 'bank'])
const selectBaseItems = ref<string[]>(['base'])

const handleCancel = () => {
  newCardStore.clearNewCardTemplate()

  window.history.length > 1 ? router.go(-1) : router.push('/')
}

const submit = handleSubmit(values => {
  createdCard.cardName = values.name;
  createdCard.cardMoneyType = values.selectType;
  createdCard.baseCardName = values.selectBase;
  createdCard.currentSum = values.startAmount;

  newCardStore.saveNewCard(createdCard);

  router.push('cards')
})

</script>

<template>
  <form class="form" @submit.prevent="submit">
    <div class="fields-block">
      <v-text-field
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        variant="outlined"
        label="Name Of A New Card"></v-text-field>
      <v-select
        v-model="selectType.value.value"
        :error-messages="selectType.errorMessage.value" 
        :items="selectTypeItems"
        variant="outlined"
        label="Select Type Of Money"></v-select>
      <v-select 
        v-model="selectBase.value.value" 
        :error-messages="selectBase.errorMessage.value"
        :items="selectBaseItems"
        variant="outlined"
        label="Select A Base Card"></v-select>
      <v-text-field
        type="number"
        v-model="startAmount.value.value"
        :error-messages="startAmount.errorMessage.value"
        variant="outlined"
        label="Start Amount"></v-text-field>
    </div>
    <div class="btns-block">
      <v-btn class="base-btn cancel-btn" @click="handleCancel">Cancel</v-btn>
      <v-btn class="base-btn clear-btn" @click="handleReset">Clear</v-btn>
      <v-btn class="base-btn next-btn" type="submit">Create</v-btn>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}

.fields-block {
  justify-self: center;
}

.btns-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}

.v-btn {
  text-transform: unset;
}

.base-btn {
  min-width: 90px;
}

.next-btn {
  background-color: #26A69A;
}

.clear-btn {
  outline-offset: -4px;
  outline: 2px solid #26A69A;
}

.cancel-btn {
  outline-offset: -4px;
  outline: 2px solid var(--base-view-title-color);
}
</style>
