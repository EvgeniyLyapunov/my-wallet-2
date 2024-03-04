<script setup lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue'

import NameAndTypeForm from './components/name-and-type-form/NameAndTypeForm.vue'
import OtherSetAndConfirm from './components/other-set-and-confirm/OtherSetAndConfirm.vue'

defineComponent({
  name: 'new-card',
  path: '/wallet/new-card'
})

const isConfirmStep = ref(false)
</script>

<template>
  <div class="content">
    <div class="title-block">
      <h1 class="title">Wallet</h1>
      <h2 class="subtitle">New Card</h2>
    </div>
    <div class="forms-block">
      <NameAndTypeForm v-if="!isConfirmStep" :isConfirmStep="isConfirmStep" />
      <OtherSetAndConfirm v-if="isConfirmStep" :isConfirmStep="isConfirmStep" />
    </div>
  </div>
</template>

<style scoped>
@import '@/views/new-card/new-card.css';
</style>
