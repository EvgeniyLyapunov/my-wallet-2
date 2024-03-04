<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'cards',
  path: '/wallet/cards'
})
</script>

<template>
  <div class="content">
    <div class="title-block">
      <h1 class="title">Wallet</h1>
      <h2 class="subtitle">Cards</h2>
    </div>
    <div class="cards-area">
      <div v-for="n in 18" :key="n" class="card-place"></div>
    </div>
    <div class="nav-block">
      <router-link :to="{ name: 'home' }" class="menu-link">
        <span class="link-item">Home page</span>
      </router-link>

      <router-link :to="{ name: 'new-card' }" class="menu-link">
        <span class="link-item">New Card</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import '@/views/cards/cards-view.css';
</style>
