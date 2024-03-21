<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import type Card from '@/models/Card';
import { ref } from 'vue';

type TProp = {
  isConfirmStep: boolean
  newCard: Card
}

defineProps<TProp>()

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if(value?.length >= 2 || value?.length <= 30)
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
    }
  }
})

const name = useField('name')
const selectType = useField<string>('selectType')
const selectBase = useField<string>('selectBase')

const selectTypeItems = ref<string[]>(['cash', 'bank'])
const selectBaseItems = ref<string[]>(['base'])


const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })

</script>

<template>
  <form class="form" @submit.prevent="submit">
    <div class="fields-block">
      <v-text-field
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        label="Name Of A New Card"></v-text-field>
      <v-combobox
        v-model="selectType.value.value"
        :error-messages="selectType.errorMessage.value" 
        :items="selectTypeItems"
        label="Select Type Of Money"></v-combobox>
      <v-select 
        v-model="selectBase.value.value" 
        :error-messages="selectBase.errorMessage.value"
        :items="selectBaseItems" 
        label="Select A Base Card"></v-select>
    </div>
    <div class="btns-block">
      <v-btn class="base-btn cancel-btn">Cancel</v-btn>
      <v-btn class="base-btn clear-btn" @click="handleReset">Clear</v-btn>
      <v-btn class="base-btn next-btn" type="submit">Next</v-btn>
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
