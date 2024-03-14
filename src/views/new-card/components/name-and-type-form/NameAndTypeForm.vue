<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import type Card from '@/models/Card';

type TProp = {
  isConfirmStep: boolean
  newCard: Card
}

defineProps<TProp>()

const { handleSubmit, handleReset } = useForm({
  validationSchema: {

  }
})

const name = useField('name')
const selectType = useField('name')
const selectBase = useField('name')

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })

</script>

<template>
  <form class="form" @submit.prevent="submit">
    <div class="fields-block">
      <v-text-field
        v-model="name.value.value"
        label="Name Of A New Card"></v-text-field>
      <v-select
        v-model="selectType.value.value" 
        label="Select Type Of Money"></v-select>
      <v-select 
        v-model="selectBase.value.value" 
        label="Select A Base Card"></v-select>
    </div>
    <div class="btns-block">
      <v-btn class="base-btn cancel-btn">Cancel</v-btn>
      <v-btn class="base-btn clear-btn" @click="handleReset">Clear</v-btn>
      <v-btn class="base-btn next-btn">Next</v-btn>
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
