<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'wallet',
  path: '/wallet'
})
</script>

<template>
  <div class="content">
    <div>
      <h1 class="title">Wallet</h1>
    </div>

    <div class="menu-block">
      <router-link :to="{ name: 'new-card' }" class="menu-link">
        <span class="link-item">New Card</span>
      </router-link>

      <router-link :to="{ name: 'cards' }" class="menu-link">
        <span class="link-item">Cards</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import '@/views/wallet/wallet-view.css';
</style>
